const MESHOBJECT = require('./meshObject.js');

class mesh_bank {
    constructor() {
        this._meshObject = [];
    }

    add_mesh(mesh, id, preview)
    {
        let obj = new MESHOBJECT.meshObject();

        obj.mesh = mesh;
        obj.id = id;
        obj.preview = preview;

        this._meshObject.push(obj)
        console.log("Mesh added")
    }

    request_add_mesh(mesh)
    {
        
    }

    remove_mesh(id)
    {
        /// find element
    }
}