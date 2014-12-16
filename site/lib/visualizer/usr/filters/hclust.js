

define(['lib/datamining/clustering/hclust', 'lib/datamining/math/distance'], function (hclust, Distance) {

    function getTree(cluster, infos, counter, distance) {
        var clustDist = cluster.distance;
        if (!counter) {
            counter = {val: 0, root: clustDist};
            distance = clustDist;
        }
        var tree = {children: [], length: distance - clustDist, rootDist: counter.root - clustDist, name: counter.val++};
        if (cluster.children.length === 0) {
            if (infos) {
                var info = infos[[cluster.elements[0].index]];
                for (var prop in info) {
                    tree[prop] = info[prop];
                }
            }
            return tree;
        } else {
            distance = counter.root - tree.rootDist;
            for (var i = 0, ii = cluster.children.length; i < ii; i++) {
                tree.children[i] = getTree(cluster.children[i], infos, counter, distance);
            }
        }
        return tree;
    }

    return {
        filter: function hclustFilter(data, resolve) {

            var result = hclust.compute(data.get(), hclust.methods.completeLinkage, Distance.euclidean);
            var tree = getTree(result);
            resolve({type: "tree", value: tree});

        }
    };

});