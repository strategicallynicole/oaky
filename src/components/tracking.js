'use strict';

import React from "react"

const iframesrc = `<iframe src="https://app.prospect.io/companies/d749a87c-13af-410a-a09a-6d8dd6825938/tracker?u='+encodeURI(document.location.href)+'&t='+encodeURI(document.title)+'" width="0" height="0" style="display:none;"></iframe>`;

const ProspectIO = () => {return ( <> <div dangerouslySetInnerHTML={{ __html: iframesrc }}></div></>) };

export default ProspectIO
