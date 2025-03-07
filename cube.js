class Cube {
    constructor() {
        this.type = 'Cube';
        this.color = [0.0, 0.0, 0.0, 0.0];
        this.matrix = new Matrix4();
        this.coords = [
            0.0, 0.0, 0.0,   1.0, 1.0, 0.0,   1.0, 0.0, 0.0,
            0.0, 0.0, 0.0,   0.0, 1.0, 0.0,   1.0, 1.0, 0.0,
            1.0, 0.0, 1.0,   1.0, 1.0, 1.0,   0.0, 1.0, 1.0,
            1.0, 0.0, 1.0,   0.0, 1.0, 1.0,   0.0, 0.0, 1.0,
            1.0, 0.0, 0.0,   1.0, 1.0, 0.0,   1.0, 1.0, 1.0,
            1.0, 0.0, 0.0,   1.0, 1.0, 1.0,   1.0, 0.0, 1.0,
            0.0, 0.0, 1.0,   0.0, 1.0, 1.0,   0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,   0.0, 1.0, 0.0,   0.0, 0.0, 0.0,
            1.0, 0.0, 0.0,   1.0, 0.0, 1.0,   0.0, 0.0, 1.0,
            1.0, 0.0, 0.0,   0.0, 0.0, 1.0,   0.0, 0.0, 0.0,
            0.0, 1.0, 0.0,   0.0, 1.0, 1.0,   1.0, 1.0, 1.0,
            0.0, 1.0, 0.0,   1.0, 1.0, 1.0,   1.0, 1.0, 0.0
        ]; 
        this.uvcoords = [
            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,
            1,0, 1,1, 0,1,
            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,
            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,
            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,
            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,
            1,0, 0,1, 0,0
        ];
        this.normals = [
            // Front face
            0,0,1, 0,0,1, 0,0,1,
            0,0,1, 0,0,1, 0,0,1,
            
            // Back face
            0,0,-1, 0,0,-1, 0,0,-1,
            0,0,-1, 0,0,-1, 0,0,-1,
            
            // Right face
            1,0,0, 1,0,0, 1,0,0,
            1,0,0, 1,0,0, 1,0,0,
            
            // Left face
            -1,0,0, -1,0,0, -1,0,0,
            -1,0,0, -1,0,0, -1,0,0,
            
            // Top face
            0,1,0, 0,1,0, 0,1,0,
            0,1,0, 0,1,0, 0,1,0,
            
            // Bottom face
            0,-1,0, 0,-1,0, 0,-1,0,
            0,-1,0, 0,-1,0, 0,-1,0
        ];
    }

    render() {
        var rgba = this.color;
        gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
       
     
        drawTriangleUVNormal(this.coords, this.uvcoords, this.normals);
    }
}
