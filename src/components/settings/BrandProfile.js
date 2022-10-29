import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SettingsHeader from '../common/SettingsHeader';


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const BrandPrfile = () => {
    return (
        <SettingsHeader heading={'Brand Profile'} labelText='Information entered on this page will be visible to retailers within ShopDot        '>
            <div className='pt-4'>
                <div className="shippingLocationwrapper">
                    <div className='settingLayoutHeading' style={{ borderBottom: '1px solid #E5E5E5' }} >
                        <h2>Company Information</h2> <span className='required'>*</span>
                    </div>
                    <div className='row shippingLocation'>
                        <div className='col-12 mb-4'>
                            <label>Company Name</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Company name' />
                        </div>
                        <div className='col-12 mb-4'>
                            <label>Company email address</label>
                            <input type='text' className='ExtraStyledInput' placeholder='jhon@jondoe.com' />
                        </div>
                        <div className="col-12 mb-4">
                            <label>Company phone number</label>
                            <input type='text' className='ExtraStyledInput' placeholder='9128938900' />
                        </div>
                    </div>

                    <div className='settingLayoutHeading mt-5' style={{ borderBottom: '1px solid #E5E5E5' }} >
                        <h2>Brand Information</h2> <span className='required'>*</span>
                    </div>

                    <div className="row shippingLocation">
                        <div className='col-12 mb-4'>
                            <label>Company Name</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Company name' />
                        </div>
                        <div className='col-12 mb-4'>
                            <label>Company website</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Jhone.xyz' />
                        </div>
                        <label>Brand Category (Select up to three)</label>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Animals & Pet Supplies
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Hardware & DIY
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Apparel & Accessories
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Health & Beauty
                                    </div>
                                </label>
                            </div>
                        </div> <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Baby & Kids
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Home & Garden
                                    </div>
                                </label>
                            </div>
                        </div> <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Electronics
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Paper & Novelty
                                    </div>
                                </label>
                            </div>
                        </div> <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Food & Beverage
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Sports & Outdoor
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Footwear
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Toys & Games
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Furniture
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Other
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row shippingLocation">
                        <label>Brand Values</label>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        BIPOC Owned
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Eco-friendly
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Fair Trade
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Handmade
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Made in Canada
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Made in USA
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Not on Amazon
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Organic
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Size Inclusive
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Small Batch
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Social Good
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Women Owned
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="checkboxGroup">
                                <label class="form-check-label">
                                    <div class="form-check ">
                                        <input class="form-check-input" type="checkbox" value="" />
                                        Other
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 mb-4">
                            <div className='mt-2'>
                                <label>Brand description</label>
                                <div className='textEditorOuter'>
                                    <ReactQuill
                                        modules={{ toolbar: toolbarOptions }}
                                        theme="snow"
                                    // value={}
                                    // onChange={}
                                    // placeholder={}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-12 mb-4'>
                            <label>Add a video link</label>
                            <input type='text' className='ExtraStyledInput' placeholder='Video link' />
                        </div>
                    </div>




                    <div class='row shippingLocation'>
                        <div className="col-md-6 mt-5">
                            <button className="button button-grey w-100">Cancle</button>
                        </div>
                        <div className="col-md-6  mt-5">
                            <button className="button w-100" type='submit'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </SettingsHeader >
    );
}

export default BrandPrfile;
