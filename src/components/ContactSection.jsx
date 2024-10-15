import React, { useState } from 'react'
import { CONTACT } from '../constants'

const ContactSection = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>
            Get in Touch
        </h1>
        <div className='text-center tracking-tighter'>
            <p className='my-3'>
                {CONTACT.address}
            </p>
            <div className='my-3'>
                <a className='underline' href={"tel:" + CONTACT.phoneNo}>
                    {CONTACT.phoneNo}
                </a>
            </div>
            <div className='my-3'>
                <a className='underline' href={"mailto:" + CONTACT.email}>
                    {CONTACT.email}
                </a>
            </div>
        </div>
    </div>
  )
}

export default ContactSection