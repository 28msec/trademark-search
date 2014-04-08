jsoniq version "1.0";

(: Trademark example query : Search for trademarks :)

import module namespace trademarks = "http://www.28msec.com/modules/trademarks";

import module namespace req = "http://www.28msec.com/modules/http-request";

variable $criteria :=
{
    mark-identification : req:param-values("mark-identification"),
    serial-number : req:param-values("serial-number"),
    status : req:param-values("status"),
    international-class : req:param-values("internationcal-class"),
    design-code : req:param-values("design-code"),
    owner : req:param-values("owner"),
    correspondent : req:param-values("correspondent"),
    page : integer(req:param-values("page"))
};

trademarks:search(project($criteria, keys($criteria)[not($criteria.$$ eq null or string($criteria.$$) = "")]))