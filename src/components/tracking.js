'use strict';

import React from "react"

const GA = `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-159284789-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-159284789-1');
</script>`;


const iframesrc = `<iframe src="https://app.prospect.io/companies/d749a87c-13af-410a-a09a-6d8dd6825938/tracker?u='+encodeURI(document.location.href)+'&t='+encodeURI(document.title)+'" width="0" height="0" style="display:none;"></iframe>`;

const Tracking = () => {return ( <> 
<div dangerouslySetInnerHTML={{ __html: iframesrc }}></div>

</>) };

export default  Tracking ;
