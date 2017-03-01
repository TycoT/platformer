/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; };

        static getPNG(): string { return require('assets/images/background_template.png'); };
    }
    export class ImagesBaddie {
        static getName(): string { return 'baddie'; };

        static getPNG(): string { return require('assets/images/baddie.png'); };
    }
    export class ImagesCoin {
        static getName(): string { return 'coin'; };

        static getPNG(): string { return require('assets/images/coin.png'); };
    }
    export class ImagesDiamond {
        static getName(): string { return 'diamond'; };

        static getPNG(): string { return require('assets/images/diamond.png'); };
    }
    export class ImagesDude {
        static getName(): string { return 'dude'; };

        static getPNG(): string { return require('assets/images/dude.png'); };
    }
    export class ImagesEnemy {
        static getName(): string { return 'enemy'; };

        static getPNG(): string { return require('assets/images/enemy.png'); };
    }
    export class ImagesFirstaid {
        static getName(): string { return 'firstaid'; };

        static getPNG(): string { return require('assets/images/firstaid.png'); };
    }
    export class ImagesPlatform {
        static getName(): string { return 'platform'; };

        static getPNG(): string { return require('assets/images/platform.png'); };
    }
    export class ImagesPlayer {
        static getName(): string { return 'player'; };

        static getPNG(): string { return require('assets/images/player.png'); };
    }
    export class ImagesSky {
        static getName(): string { return 'sky'; };

        static getPNG(): string { return require('assets/images/sky.png'); };
    }
    export class ImagesStar {
        static getName(): string { return 'star'; };

        static getPNG(): string { return require('assets/images/star.png'); };
    }
    export class ImagesWall {
        static getName(): string { return 'wall'; };

        static getPNG(): string { return require('assets/images/wall.png'); };
    }
}

export namespace Atlases {
    enum AtlasesPreloadSpritesArrayFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; };

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); };

        static Frames = AtlasesPreloadSpritesArrayFrames;
    }
    enum AtlasesPreloadSpritesHashFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; };

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); };

        static Frames = AtlasesPreloadSpritesHashFrames;
    }
    enum AtlasesPreloadSpritesXmlFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesXml {
        static getName(): string { return 'preload_sprites_xml'; };

        static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); };

        static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); };

        static Frames = AtlasesPreloadSpritesXmlFrames;
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; };

        static getAC3(): string { return require('assets/audio/music.ac3'); };
        static getM4A(): string { return require('assets/audio/music.m4a'); };
        static getMP3(): string { return require('assets/audio/music.mp3'); };
        static getOGG(): string { return require('assets/audio/music.ogg'); };
    }
}

export namespace Audiosprites {
    enum AudiospritesSfxSprites {
        Laser1 = <any>'laser1',
        Laser2 = <any>'laser2',
        Laser3 = <any>'laser3',
        Laser4 = <any>'laser4',
        Laser5 = <any>'laser5',
        Laser6 = <any>'laser6',
        Laser7 = <any>'laser7',
        Laser8 = <any>'laser8',
        Laser9 = <any>'laser9',
    }
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; };

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); };
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); };
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); };
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); };
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); };

        static Sprites = AudiospritesSfxSprites;
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; };

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); };
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); };
    }
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; };

        static getPNG(): string { return require('assets/fonts/font_xml.png'); };
        static getXML(): string { return require('assets/fonts/font_xml.xml'); };
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Misc {
    export class ImagesThumbs {
        static getName(): string { return 'Thumbs'; };

        static getDB(): string { return require('assets/images/Thumbs.db'); };
    }
}
