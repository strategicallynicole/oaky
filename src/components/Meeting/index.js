'use strict';
import HubspotForm from 'react-hubspot-form'
import React from 'react';

const Contact = () => {

    return (
        <>
<HubspotForm
   portalId='8988772'
   formId='736e5239-cb5c-440c-9dad-ac0775b8fa70'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />
</>
    )
}
export default Contact;
