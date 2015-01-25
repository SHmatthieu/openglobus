goog.provide('og.shaderProgram.shape_wl');
goog.provide('og.shaderProgram.shape_nl');

goog.require('og.shaderProgram');
goog.require('og.shaderProgram.ShaderProgram');
goog.require('og.shaderProgram.types');
goog.require('og.utils');

og.shaderProgram.shape_wl = function () {
    return new og.shaderProgram.ShaderProgram("shape_wl", {
        uniforms: {
            uMVMatrix: { type: og.shaderProgram.types.MAT4 },
            uPMatrix: { type: og.shaderProgram.types.MAT4 },
            uTRSMatrix: { type: og.shaderProgram.types.MAT4 },
            uNMatrix: { type: og.shaderProgram.types.MAT4 },

            pointLightsPositions: { type: og.shaderProgram.types.VEC3 },
            pointLightsParamsv: { type: og.shaderProgram.types.VEC3 },
            pointLightsParamsf: { type: og.shaderProgram.types.FLOAT },

            uColor: { type: og.shaderProgram.types.VEC4 },
            uSampler: { type: og.shaderProgram.types.SAMPLER2D }
        },
        attributes: {
            aVertexNormal: { type: og.shaderProgram.types.VEC3, enableArray: true },
            aVertexPosition: { type: og.shaderProgram.types.VEC3, enableArray: true },
            aTextureCoord: { type: og.shaderProgram.types.VEC2, enableArray: true }
        },
        vertexShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "shape_wl_vs.txt"),
        fragmentShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "shape_wl_fs.txt")
    });
};

og.shaderProgram.shape_nl = function () {
    return new og.shaderProgram.ShaderProgram("shape_nl", {
        uniforms: {
            uPMVMatrix: { type: og.shaderProgram.types.MAT4 },
            uTRSMatrix: { type: og.shaderProgram.types.MAT4 },
            uColor: { type: og.shaderProgram.types.VEC4 },
            uSampler: { type: og.shaderProgram.types.SAMPLER2D }
        },
        attributes: {
            aVertexPosition: { type: og.shaderProgram.types.VEC3, enableArray: true },
            aTextureCoord: { type: og.shaderProgram.types.VEC2, enableArray: true }
        },
        vertexShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "shape_nl_vs.txt"),
        fragmentShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "shape_nl_fs.txt")
    });
};