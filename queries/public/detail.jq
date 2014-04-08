jsoniq version "1.0";

(: Trademark example query : Retrieve trademark details for a serial number :)

import module namespace trademarks = "http://www.28msec.com/modules/trademarks";
import module namespace texts = "http://www.28msec.com/modules/trademarks/texts";
import module namespace req = "http://www.28msec.com/modules/http-request";

variable $serial-number := req:param-values("serial");

variable $trademark := trademarks:get-by-serial-number($serial-number);


{| $trademark,
    {
        type-of-mark : if ($trademark.case-file-header.standard-characters-claimed-in eq "T")
                       then "Wordmark"
                       else "Logo",
        translations : [ $trademark.case-file-statements[][starts-with($$.type-code,"TR")] ],
        descriptions : [ $trademark.case-file-statements[][starts-with($$.type-code,"DM")] ],
        pseudo-marks : [ $trademark.case-file-statements[][starts-with($$.type-code,"PM")] ],
        goods-services : [ $trademark.case-file-statements[][starts-with($$.type-code,"GS")] ],
        mark-drawing-code-text : texts:mark-drawing-code($trademark),
        status-code-text : texts:status-code($trademark.case-file-header.status-code)
    }
|}
