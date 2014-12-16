define(["./../math/comparator"],function(Comparator){
    
    function HClust(data, method, distanceFunction) {
        var initialDistanceMatrix = Comparator(data, distanceFunction);
        var evolutiveDistanceMatrix = initialDistanceMatrix.clone();
        var clusters = [];
        for(var i = 0, ii = data.length; i < ii; i++) {
            clusters[i] = new Cluster().add(new ClusterElement(data[i], i));
        }
        while(clusters.length > 1) {
            var newCluster = new Cluster();
            var min = minIndex(evolutiveDistanceMatrix);
            var row = min.row, column = min.column, col=column-1;
            evolutiveDistanceMatrix.removeRow(row);
            evolutiveDistanceMatrix.removeColumn(row);
            newCluster.distance = min.v;
            newCluster.addChild(clusters[row]).addChild(clusters[column]);
            clusters.splice(row,1);
            clusters.splice(col,1,newCluster);
            var newRow = new Array(clusters.length);
            for(var i = 0; i < clusters.length; i++) {
                if(i===col) newRow[i] = 0;
                newRow[i] = method(newCluster.elements, clusters[i].elements, initialDistanceMatrix);
            }
            evolutiveDistanceMatrix.setRow(col,newRow);
            evolutiveDistanceMatrix.setColumn(col,newRow);
        }
        return clusters[0];
    }
    
    function Cluster() {
        this.elements = [];
        this.children = [];
        this.distance = 0;
    }
    
    Cluster.prototype.add = function(newElements) {
        this.elements = this.elements.concat(newElements);
        return this;
    };
    
    Cluster.prototype.addChild = function(child) {
        this.children.push(child);
        this.elements = this.elements.concat(child.elements);
        return this;
    };
    
    function ClusterElement(element, index) {
        this.data = element;
        this.index = index;
    }
    
    function minIndex(distanceMatrix) {
        var v = Infinity;
        var index = {};
        for(var i = 0, ii = distanceMatrix.rows; i < ii; i++) {
            for(var j = i+1, jj = distanceMatrix.columns; j < jj; j++) {
                if(distanceMatrix[i][j] < v) {
                    v = distanceMatrix[i][j];
                    index.row=i;
                    index.column=j;
                }
            }
        }
        index.v = v;
        return index;
    }
    
    function singleLinkage(cluster1, cluster2, distanceMatrix) {
        var min = Infinity;
        for(var i = 0, ii = cluster1.length; i < ii; i++){
            var index1 = cluster1[i].index;
            for(var j = 0, jj = cluster2.length; j < jj; j++){
                var dist = distanceMatrix[index1][cluster2[j].index];
                if(dist < min) min = dist;
            }
        }
        return min;
    }

    function completeLinkage(cluster1, cluster2, distanceMatrix) {
        var max = -Infinity;
        for(var i = 0, ii = cluster1.length; i < ii; i++){
            var index1 = cluster1[i].index;
            for(var j = 0, jj = cluster2.length; j < jj; j++){
                var dist = distanceMatrix[index1][cluster2[j].index];
                if(dist > max) max = dist;
            }
        }
        return max;
    }
    
    function averageLinkage(cluster1, cluster2, distanceMatrix) {
        var total = 0, c1 = cluster1.length, c2 = cluster2.length;
        for(var i = 0; i < c1; i++){
            var index1 = cluster1[i].index;
            for(var j = 0; j < c2; j++){
                total += distanceMatrix[index1][cluster2[j].index];
            }
        }
        return total/(c1*c2);
    }
    
    return {
        compute : HClust,
        methods : {
            singleLinkage: singleLinkage,
            completeLinkage : completeLinkage,
            upgma : averageLinkage,
            averageLinkage : averageLinkage
        }
    };
    
});