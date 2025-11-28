/// <reference types="vite/client" />

declare module '*.JPG' {
    const value: string;
    export default value;
}

declare module '*.jsx' {
    const content: any;
    export default content;
}

declare module './GlassSurface' {
    const GlassSurface: any;
    export default GlassSurface;
}

declare module '@/components/Ballpit.jsx' {
    const Ballpit: any;
    export default Ballpit;
}

declare module '@/components/DomeGallery.jsx' {
    const DomeGallery: any;
    export default DomeGallery;
}
