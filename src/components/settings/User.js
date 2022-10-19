import React from 'react';
import SettingsHeader from '../common/SettingsHeader';

const User = () => {
    return (
        <SettingsHeader heading={'User'}>

            {/*Active users section*/}
            <div>
                <div className='settingLayoutHeading d-flex justify-content-between' style={{ borderBottom: '1px solid #E5E5E5' }} >
                    <h2>Active Users</h2>
                    <a href='#' className='border-btn mb-3 ' ><span className='me-3 fs-4 fw-bolder'>+</span>Add a new user</a>
                </div>

                <div className='datalist-table_wrap'>
                    <table className="table datalist-table">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">User Access</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-group'>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="footer">
                        <div class="pagination_per">
                            <div class="pagination-title">Showing 3 items</div>
                        </div>
                        <div class="pagination_nav">
                            <div class="pagination-title">Page 1</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Pending Invites*/}

            <div>
                <div className='settingLayoutHeading' style={{ borderBottom: '1px solid #E5E5E5' }} >
                    <h2>Pending Invites</h2>

                </div>

                <div className='datalist-table_wrap'>
                    <table className="table datalist-table">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">User Access</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-group'>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <button class="tableResendBtn">Resend</button>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <button class="tableResendBtn">Resend</button>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='#' className='link-text'>
                                        john@jondoe.com
                                    </a>
                                </td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>All Access</td>
                                <td>
                                    <button class="tableResendBtn">Resend</button>
                                    <a href='#' className='tableDeleteBtn'>D</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="footer">
                        <div class="pagination_per">
                            <div class="pagination-title">Showing 3 items</div>
                        </div>
                        <div class="pagination_nav">
                            <div class="pagination-title">Page 1</div>
                        </div>
                    </div>
                </div>
            </div>



        </SettingsHeader>
    );
}

export default User;
