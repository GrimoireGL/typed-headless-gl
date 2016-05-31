
interface STACKGL_resize_drawingbuffer {
    resize(width: GLint, height: GLint): void;
}

interface STACKGL_destroy_context {
    destroy(): void;
}

interface HeadlessGLOptions {
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    preferLowPowerToHighPerformance?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
}

interface HeadlessWebGLRenderingContext extends WebGLRenderingContext {
    getExtension(extName: "STACKGL_resize_drawingbuffer"): STACKGL_resize_drawingbuffer;
    getExtension(extName: "STACKGL_destroy_context"): STACKGL_destroy_context;
}

declare function gl(width: number, height: number, options?: HeadlessGLOptions): HeadlessWebGLRenderingContext;

export = gl;
