'use strict';
import React from 'react';
import { Helmet } from 'react-helmet'

const Schedule = () => {

    return (
        <>
<div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/n18/oakwave-consultation?embed=true"></div>
<div
    className="content-body load-external-scripts"
    dangerouslySetInnerHTML={{ __html: null }}
/>
<Helmet>
    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

</Helmet>
</>
    )
}
export default Schedule;
