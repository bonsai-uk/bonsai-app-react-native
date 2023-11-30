import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from '@expo/vector-icons';

type IconProps = {
    iconSource: Icons.source;
    iconName: string;
    size?: number;
    color?: string;
};

export const Icon = ({ iconSource, iconName, size, color }: IconProps) => {
    const DEFAULT_SIZE = 24;
    const DEFAULT_COLOR = '#23C686';

    switch (iconSource) {
        case 'AntDesign':
            return (
                <AntDesign
                    name={iconName as keyof typeof AntDesign.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Entypo':
            return (
                <Entypo
                    name={iconName as keyof typeof Entypo.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'EvilIcons':
            return (
                <EvilIcons
                    name={iconName as keyof typeof EvilIcons.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Feather':
            return (
                <Feather
                    name={iconName as keyof typeof Feather.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'FontAwesome':
            return (
                <FontAwesome
                    name={iconName as keyof typeof FontAwesome.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'FontAwesome5':
            return (
                <FontAwesome5
                    name={iconName as keyof typeof FontAwesome5.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Fontisto':
            return (
                <Fontisto
                    name={iconName as keyof typeof Fontisto.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Foundation':
            return (
                <Foundation
                    name={iconName as keyof typeof Foundation.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Ionicons':
            return (
                <Ionicons
                    name={iconName as keyof typeof Ionicons.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'MaterialCommunityIcons':
            return (
                <MaterialCommunityIcons
                    name={
                        iconName as keyof typeof MaterialCommunityIcons.glyphMap
                    }
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'MaterialIcons':
            return (
                <MaterialIcons
                    name={iconName as keyof typeof MaterialIcons.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Octicons':
            return (
                <Octicons
                    name={iconName as keyof typeof Octicons.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'SimpleLineIcons':
            return (
                <SimpleLineIcons
                    name={iconName as keyof typeof SimpleLineIcons.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
        case 'Zocial':
            return (
                <Zocial
                    name={iconName as keyof typeof Zocial.glyphMap}
                    size={size || DEFAULT_SIZE}
                    color={color || DEFAULT_COLOR}
                />
            );
    }
};
