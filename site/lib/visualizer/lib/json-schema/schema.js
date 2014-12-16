define(function(){
    
    function generate_schema_from_object(object) {
        var schema = {};
        switch(typeof object) {
            case "object":
				if(object === null) {
					schema.type = "string";
					break;
				}
                if(Array.isArray(object)) {
                    schema.type = "array";
                    if(object.length) {
                        schema.items = generate_schema_from_object(object[0]);
                    }
                } else {
                    schema.type = "object";
                    if(Object.keys(object).length) {
                        schema.properties = {};
                        for(var i in object) {
                            schema.properties[i] = generate_schema_from_object(object[i]);
                        }
                    }
                }
                break;
            default:
                schema.type = typeof object;
        }
        return schema;
    }
    
    return {
        fromObject: generate_schema_from_object
    };
    
});