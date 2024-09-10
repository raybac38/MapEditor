/*
This script is responsible for finding all mesh in a folder, 
detect change in the folder

*/

const fs = require("fs");
const path = require("path")


const defautl_meshes_folder_name = "meshes"
const default_meshes_folder_path = "./" + defautl_meshes_folder_name

const defautl_data_json_file_name = "data.json"
const default_data_json_file = default_meshes_folder_path + "/" + defautl_data_json_file_name



function detect_meshes_folder() {
    fs.access(default_meshes_folder_path, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log("missing meshes folder")
                create_meshes_folder()
            }
            else if (err.code === 'EACCES') {
                console.log("Insufficient permissions to read or write meshes folder")
            } else {
                console.log("Error checking meshes folder")
            }
        }
        else {
            console.log("meshes folder detected")
        }
    })
}

function create_meshes_folder() {
    fs.mkdir(default_meshes_folder_path, { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        }
        else
        {
            console.log("meshes folder initialised")
        }
    })
}

function detect_data_json_file() {
    fs.access(default_data_json_file, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log("missing data.json")
                create_data_json_file()
            }
            else if (err.code === 'EACCES') {
                console.log("Insufficient permissions to read or write data.json")
            } else {
                console.log("Error checking data.json")
            }
        }
        else {
            console.log("data.json detected")
        }
    })
}

function create_data_json_file() {
    fs.writeFile(default_data_json_file, '{\n}', 'utf-8', (err) => {
        if (err) {
            console.log("Unable to initialise data.json")
        }
        else {
            console.log("data.json initialised")
        }
    })
}

function scan_meshes_folder()
{

    let folder_obj;
    fs.readdir(default_meshes_folder_path, (err, files)=>
    {
        if(err)
        {
            console.log("Unable to scan meshes folder");
            return;
        }
        else
        {
            folder_obj = files.filter((file) => path.extname(file).toLowerCase() === '.obj');
            if(folder_obj.length > 0)
            {
                console.log("Found " + folder_obj.length + " meshes");
                folder_obj.forEach(element => {
                    console.log(element);
                });
            }else
            {
                console.log("No meshes found");
            }
        }
    })

    



}

class MeshFinder {
    constructor(parameters) {
        this.init_procedure()
    }
    init_procedure() {
        detect_meshes_folder()
        detect_data_json_file()
        scan_meshes_folder()
    }

    
}






var meshFinder = new MeshFinder();
