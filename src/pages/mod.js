
import React, { Component } from "react"
import { Helmet } from "react-helmet"

const htmltwo = require("../../static/demo.html");

const ClientSideOnlyLazy = React.lazy(() =>
import(htmltwo)
)
const MyModel = () => {
    return (
      <>

<Helmet>

<script type="text/javascript" src="https://unpkg.com/vue"></script>
<script type="text/javascript" src="https://unpkg.com/zircle"></script></Helmet>
        <section dangerouslySetInnerHTML={ {__html: htmltwo} } />

        {!isSSR && (
          <React.Suspense fallback={<div />}>

            <ClientSideOnlyLazy />

          </React.Suspense>
        )}
      </>
    )
  }
export default MyModel;
