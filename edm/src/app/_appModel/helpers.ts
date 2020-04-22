import * as $ from "jquery";
export class Helpers {
    static loadStyles(tag, src) {
        if (Array.isArray(src)) {
            $.each(src, function (k, s) {
                $(tag).append($('<link />').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css').attr('domaincss', 'yes'));
            });
        } else {
            $(tag).append($('<link />').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css').attr('domaincss', 'yes'));
        }
    }

    static setLoading(enable, continueLoading: boolean = false) {
        if (enable) {
            $('#mainloader').css('display', 'block');
        } else {
            $('#mainloader').css('display', 'none');
        }
        if (!continueLoading) {
            setTimeout(() => {
                $('#mainloader').css('display', 'none');
            }, 1500);
        }
    }
}