import {Platform} from 'react-native';

const fonts =
  Platform.OS == 'android'
    ? {
        MONT_BLACK: 'montserratblack',
        MONT_BLACK_ITALIC: 'montserratblackitalic',
        MONT_BOLD: 'montserratbold',
        MONT_BOLD_ITALIC: 'montserratbolditalic',
        MONT_EXTRA_BOLD: 'montserratextrabold',
        MONT_EXTRA_BOLD_ITALIC: 'montserratextrabolditalic',
        MONT_EXTRA_LIGHT: 'montserratextralight',
        MONT_EXTRA_LIGHT_ITALIC: 'montserratextralightitalic',
        MONT_ITALIC: 'montserratitalic',
        MONT_LIGHT: 'montserratlight',
        MONT_LIGHT_ITALIC: 'montserratlightitalic',
        MONT_MEDIUM: 'montserratmedium',
        MONT_MEDIUM_ITALIC: 'montserratmediumitalic',
        MONT_REGULAR: 'montserratregular',
        MONT_SEMI_BOLD: 'montserratsemibold',
        MONT_SEMI_BOLD_ITALIC: 'montserratsemibolditalic',
        MONT_THIN: 'montserratthin',
        MONT_THIN_ITALIC: 'montserratthinitalic',
      }
    : {
        MONT_BLACK: 'Montserrat-Black',
        MONT_BLACK_ITALIC: 'Montserrat-BlackItalic',
        MONT_BOLD: 'Montserrat-Bold',
        MONT_BOLD_ITALIC: 'Montserrat-BoldItalic',
        MONT_EXTRA_BOLD: 'Montserrat-ExtraBold',
        MONT_EXTRA_BOLD_ITALIC: 'Montserrat-BoldItalic',
        MONT_EXTRA_LIGHT: 'Montserrat-ExtraLight',
        MONT_EXTRA_LIGHT_ITALIC: 'Montserrat-ExtraLightItalic',
        MONT_ITALIC: 'Montserrat-Italic',
        MONT_LIGHT: 'Montserrat-Light',
        MONT_LIGHT_ITALIC: 'Montserrat-LightItalic',
        MONT_MEDIUM: 'Montserrat-Medium',
        MONT_MEDIUM_ITALIC: 'Montserrat-MediumItalic',
        MONT_REGULAR: 'Montserrat-Regular',
        MONT_SEMI_BOLD: 'Montserrat-SemiBold',
        MONT_SEMI_BOLD_ITALIC: 'Montserrat-SemiBoldItalic',
        MONT_THIN: 'Montserrat-Thin',
        MONT_THIN_ITALIC: 'Montserrat-ThinItalic',
      };

export default fonts;
