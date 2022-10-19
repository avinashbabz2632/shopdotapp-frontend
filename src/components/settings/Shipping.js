import React from 'react';
import SettingsHeader from '../common/SettingsHeader';
import Note from '../common/note';

const noteDate = ['No international shipping as of the moment.', 'You can also edit shipping rates on a per product level under Products.']

const Shipping = () => {
    return (
        <SettingsHeader heading={'Shipping Information '} isRequired>
            <div>
                <div className="shippingLocationwrapper">
                    <div className='settingLayoutHeading' style={{ borderBottom: '1px solid #E5E5E5' }} >
                        <h2>Shipping Location</h2> <span className='required'>*</span>
                    </div>
                    <div className='row shippingLocation'>
                        <div className='col-12 mb-4'>
                            <label>Street Address 1</label>
                            <input type='text' className='ExtraStyledInput' placeholder='3102 W Boardway Street' />
                        </div>
                        <div className='col-12 mb-4'>
                            <label>Street Address 2</label>
                            <input type='text' className='ExtraStyledInput' placeholder='3102 W Boardway Street' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label>Country</label>
                            <select class="form-select form-select-sm">
                                <option value="1">United State</option>
                                <option value="2">India</option>
                                <option value="3">Japan</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label>State</label>
                            <select class="form-select form-select-sm">
                                <option value="1">Montona</option>
                                <option value="2">Texas</option>
                                <option value="3">Ohio</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label>City</label>
                            <select class="form-select form-select-sm">
                                <option value="1">United State</option>
                                <option value="2">India</option>
                                <option value="3">Japan</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-4">
                            <label>Pin code</label>
                            <input type='text' className='ExtraStyledInput' placeholder='59080' />
                        </div>
                    </div>
                    <div className="row shippingRate">
                        <div className='col-12 settingLayoutHeading mt-5' >
                            <h2>Default Shipping Flat Rates</h2>
                        </div>
                        <div className="col-12">
                            <h6>Domestic Shipping Rates</h6>
                            <p className='text'>
                                You can use this section to define domestic shipping cost, incremental fees for each additional item, and the expected shipping time for domestic shipments.
                            </p>
                        </div>
                        <div className="d-flex col-md-7 mt-5 align-items-center">
                            <div>
                                <h6 className='mt-5 me-5'>Domestic</h6>
                            </div>
                            <div className='w-100'>
                                <label>Shipping cost</label>

                                <input type='text' className='ExtraStyledInput' placeholder='4.95' />
                            </div>
                        </div>
                        <div className="col-md-5  mt-5 ">
                            <label>Incremental fee</label>
                            <input type='text' className='ExtraStyledInput' placeholder='0' />
                        </div>
                        <div className="col-md-12 mt-5">
                            <label>Total Shipping Time</label>
                            <select class="form-select form-select-sm">
                                <option value="1">3-7 days</option>
                                <option value="2">7-14 days</option>
                                <option value="3">14-21 days</option>
                                <option value="3">21 days</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <Note data={noteDate} />
                        </div>
                        <div className="col-md-6 mt-5">
                            <button className="button button-grey w-100">Cancle</button>
                        </div>
                        <div className="col-md-6  mt-5">
                            <button className="button w-100" type='submit'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </SettingsHeader>
    );
}

export default Shipping;
