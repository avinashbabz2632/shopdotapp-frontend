import { forwardRef } from 'react';

const SideBar = forwardRef((props, ref) => {
    return (
        <>
            <aside className="filters">
                <div className="filters_block filters_block-body">
                    <div className="filter-by-brand">
                        <div className="filter_body">
                            <div className="subfilters">
                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        Brand Values
                                    </div>
                                    <div className="filter_form-items">
                                        <div className="subfilter_body">
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-1">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-1"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Not on Amazon
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-2">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-2"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Made in USA
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-3">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-3"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Made in Canada
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-4">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-4"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Handmade
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-5">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-5"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Eco-friendly
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-6">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-6"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Fair Trade
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-7">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-7"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Social Good
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-8">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-8"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Women Owned
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-9">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-9"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Small Batch
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-10">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-10"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Organic
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-11">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-11"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        BIPOC Owned
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                                <label htmlFor="bv-12">
                                                    <input
                                                        type="checkbox"
                                                        id="bv-12"
                                                        name="bv"
                                                    />
                                                    <div className="checkbox-text">
                                                        Size Inclusive
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        shipping location
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="select">
                                            <select
                                                name="ship-state"
                                                id="ship-state"
                                                // onChange="loadBrandData()"
                                            >
                                                <option
                                                    value=""
                                                    disabled=""
                                                >
                                                    State
                                                </option>
                                                <option
                                                    value="Alabama"
                                                    data-val="Alabama"
                                                    data-id="1456"
                                                >
                                                    Alabama
                                                </option>
                                                <option
                                                    value="Alaska"
                                                    data-val="Alaska"
                                                    data-id="1400"
                                                >
                                                    Alaska
                                                </option>
                                                <option
                                                    value="American Samoa"
                                                    data-val="American Samoa"
                                                    data-id="1424"
                                                >
                                                    American Samoa
                                                </option>
                                                <option
                                                    value="Arizona"
                                                    data-val="Arizona"
                                                    data-id="1434"
                                                >
                                                    Arizona
                                                </option>
                                                <option
                                                    value="Arkansas"
                                                    data-val="Arkansas"
                                                    data-id="1444"
                                                >
                                                    Arkansas
                                                </option>
                                                <option
                                                    value="Baker Island"
                                                    data-val="Baker Island"
                                                    data-id="1402"
                                                >
                                                    Baker Island
                                                </option>
                                                <option
                                                    value="California"
                                                    data-val="California"
                                                    data-id="1416"
                                                >
                                                    California
                                                </option>
                                                <option
                                                    value="Colorado"
                                                    data-val="Colorado"
                                                    data-id="1450"
                                                >
                                                    Colorado
                                                </option>
                                                <option
                                                    value="Connecticut"
                                                    data-val="Connecticut"
                                                    data-id="1435"
                                                >
                                                    Connecticut
                                                </option>
                                                <option
                                                    value="Delaware"
                                                    data-val="Delaware"
                                                    data-id="1399"
                                                >
                                                    Delaware
                                                </option>
                                                <option
                                                    value="District of Columbia"
                                                    data-val="District of Columbia"
                                                    data-id="1437"
                                                >
                                                    District of Columbia
                                                </option>
                                                <option
                                                    value="Florida"
                                                    data-val="Florida"
                                                    data-id="1436"
                                                >
                                                    Florida
                                                </option>
                                                <option
                                                    value="Georgia"
                                                    data-val="Georgia"
                                                    data-id="1455"
                                                >
                                                    Georgia
                                                </option>
                                                <option
                                                    value="Guam"
                                                    data-val="Guam"
                                                    data-id="1412"
                                                >
                                                    Guam
                                                </option>
                                                <option
                                                    value="Hawaii"
                                                    data-val="Hawaii"
                                                    data-id="1411"
                                                >
                                                    Hawaii
                                                </option>
                                                <option
                                                    value="Howland Island"
                                                    data-val="Howland Island"
                                                    data-id="1398"
                                                >
                                                    Howland Island
                                                </option>
                                                <option
                                                    value="Idaho"
                                                    data-val="Idaho"
                                                    data-id="1460"
                                                >
                                                    Idaho
                                                </option>
                                                <option
                                                    value="Illinois"
                                                    data-val="Illinois"
                                                    data-id="1425"
                                                >
                                                    Illinois
                                                </option>
                                                <option
                                                    value="Indiana"
                                                    data-val="Indiana"
                                                    data-id="1440"
                                                >
                                                    Indiana
                                                </option>
                                                <option
                                                    value="Iowa"
                                                    data-val="Iowa"
                                                    data-id="1459"
                                                >
                                                    Iowa
                                                </option>
                                                <option
                                                    value="Jarvis Island"
                                                    data-val="Jarvis Island"
                                                    data-id="1410"
                                                >
                                                    Jarvis Island
                                                </option>
                                                <option
                                                    value="Johnston Atoll"
                                                    data-val="Johnston Atoll"
                                                    data-id="1428"
                                                >
                                                    Johnston Atoll
                                                </option>
                                                <option
                                                    value="Kansas"
                                                    data-val="Kansas"
                                                    data-id="1406"
                                                >
                                                    Kansas
                                                </option>
                                                <option
                                                    value="Kentucky"
                                                    data-val="Kentucky"
                                                    data-id="1419"
                                                >
                                                    Kentucky
                                                </option>
                                                <option
                                                    value="Kingman Reef"
                                                    data-val="Kingman Reef"
                                                    data-id="1403"
                                                >
                                                    Kingman Reef
                                                </option>
                                                <option
                                                    value="Louisiana"
                                                    data-val="Louisiana"
                                                    data-id="1457"
                                                >
                                                    Louisiana
                                                </option>
                                                <option
                                                    value="Maine"
                                                    data-val="Maine"
                                                    data-id="1453"
                                                >
                                                    Maine
                                                </option>
                                                <option
                                                    value="Maryland"
                                                    data-val="Maryland"
                                                    data-id="1401"
                                                >
                                                    Maryland
                                                </option>
                                                <option
                                                    value="Massachusetts"
                                                    data-val="Massachusetts"
                                                    data-id="1433"
                                                >
                                                    Massachusetts
                                                </option>
                                                <option
                                                    value="Michigan"
                                                    data-val="Michigan"
                                                    data-id="1426"
                                                >
                                                    Michigan
                                                </option>
                                                <option
                                                    value="Midway Atoll"
                                                    data-val="Midway Atoll"
                                                    data-id="1438"
                                                >
                                                    Midway Atoll
                                                </option>
                                                <option
                                                    value="Minnesota"
                                                    data-val="Minnesota"
                                                    data-id="1420"
                                                >
                                                    Minnesota
                                                </option>
                                                <option
                                                    value="Mississippi"
                                                    data-val="Mississippi"
                                                    data-id="1430"
                                                >
                                                    Mississippi
                                                </option>
                                                <option
                                                    value="Missouri"
                                                    data-val="Missouri"
                                                    data-id="1451"
                                                >
                                                    Missouri
                                                </option>
                                                <option
                                                    value="Montana"
                                                    data-val="Montana"
                                                    data-id="1446"
                                                >
                                                    Montana
                                                </option>
                                                <option
                                                    value="Navassa Island"
                                                    data-val="Navassa Island"
                                                    data-id="1439"
                                                >
                                                    Navassa Island
                                                </option>
                                                <option
                                                    value="Nebraska"
                                                    data-val="Nebraska"
                                                    data-id="1408"
                                                >
                                                    Nebraska
                                                </option>
                                                <option
                                                    value="Nevada"
                                                    data-val="Nevada"
                                                    data-id="1458"
                                                >
                                                    Nevada
                                                </option>
                                                <option
                                                    value="New Hampshire"
                                                    data-val="New Hampshire"
                                                    data-id="1404"
                                                >
                                                    New Hampshire
                                                </option>
                                                <option
                                                    value="New Jersey"
                                                    data-val="New Jersey"
                                                    data-id="1417"
                                                >
                                                    New Jersey
                                                </option>
                                                <option
                                                    value="New Mexico"
                                                    data-val="New Mexico"
                                                    data-id="1423"
                                                >
                                                    New Mexico
                                                </option>
                                                <option
                                                    value="New York"
                                                    data-val="New York"
                                                    data-id="1452"
                                                >
                                                    New York
                                                </option>
                                                <option
                                                    value="North Carolina"
                                                    data-val="North Carolina"
                                                    data-id="1447"
                                                >
                                                    North Carolina
                                                </option>
                                                <option
                                                    value="North Dakota"
                                                    data-val="North Dakota"
                                                    data-id="1418"
                                                >
                                                    North Dakota
                                                </option>
                                                <option
                                                    value="Northern Mariana Islands"
                                                    data-val="Northern Mariana Islands"
                                                    data-id="1431"
                                                >
                                                    Northern Mariana Islands
                                                </option>
                                                <option
                                                    value="Ohio"
                                                    data-val="Ohio"
                                                    data-id="4851"
                                                >
                                                    Ohio
                                                </option>
                                                <option
                                                    value="Oklahoma"
                                                    data-val="Oklahoma"
                                                    data-id="1421"
                                                >
                                                    Oklahoma
                                                </option>
                                                <option
                                                    value="Oregon"
                                                    data-val="Oregon"
                                                    data-id="1415"
                                                >
                                                    Oregon
                                                </option>
                                                <option
                                                    value="Palmyra Atoll"
                                                    data-val="Palmyra Atoll"
                                                    data-id="1448"
                                                >
                                                    Palmyra Atoll
                                                </option>
                                                <option
                                                    value="Pennsylvania"
                                                    data-val="Pennsylvania"
                                                    data-id="1422"
                                                >
                                                    Pennsylvania
                                                </option>
                                                <option
                                                    value="Puerto Rico"
                                                    data-val="Puerto Rico"
                                                    data-id="1449"
                                                >
                                                    Puerto Rico
                                                </option>
                                                <option
                                                    value="Rhode Island"
                                                    data-val="Rhode Island"
                                                    data-id="1461"
                                                >
                                                    Rhode Island
                                                </option>
                                                <option
                                                    value="South Carolina"
                                                    data-val="South Carolina"
                                                    data-id="1443"
                                                >
                                                    South Carolina
                                                </option>
                                                <option
                                                    value="South Dakota"
                                                    data-val="South Dakota"
                                                    data-id="1445"
                                                >
                                                    South Dakota
                                                </option>
                                                <option
                                                    value="Tennessee"
                                                    data-val="Tennessee"
                                                    data-id="1454"
                                                >
                                                    Tennessee
                                                </option>
                                                <option
                                                    value="Texas"
                                                    data-val="Texas"
                                                    data-id="1407"
                                                >
                                                    Texas
                                                </option>
                                                <option
                                                    value="United States Minor Outlying Islands"
                                                    data-val="United States Minor Outlying Islands"
                                                    data-id="1432"
                                                >
                                                    United States Minor Outlying
                                                    Islands
                                                </option>
                                                <option
                                                    value="United States Virgin Islands"
                                                    data-val="United States Virgin Islands"
                                                    data-id="1413"
                                                >
                                                    United States Virgin Islands
                                                </option>
                                                <option
                                                    value="Utah"
                                                    data-val="Utah"
                                                    data-id="1414"
                                                >
                                                    Utah
                                                </option>
                                                <option
                                                    value="Vermont"
                                                    data-val="Vermont"
                                                    data-id="1409"
                                                >
                                                    Vermont
                                                </option>
                                                <option
                                                    value="Virginia"
                                                    data-val="Virginia"
                                                    data-id="1427"
                                                >
                                                    Virginia
                                                </option>
                                                <option
                                                    value="Wake Island"
                                                    data-val="Wake Island"
                                                    data-id="1405"
                                                >
                                                    Wake Island
                                                </option>
                                                <option
                                                    value="Washington"
                                                    data-val="Washington"
                                                    data-id="1462"
                                                >
                                                    Washington
                                                </option>
                                                <option
                                                    value="West Virginia"
                                                    data-val="West Virginia"
                                                    data-id="1429"
                                                >
                                                    West Virginia
                                                </option>
                                                <option
                                                    value="Wisconsin"
                                                    data-val="Wisconsin"
                                                    data-id="1441"
                                                >
                                                    Wisconsin
                                                </option>
                                                <option
                                                    value="Wyoming"
                                                    data-val="Wyoming"
                                                    data-id="1442"
                                                >
                                                    Wyoming
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        Retail pricing
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="checkbox checkbox--no-decor">
                                            <label htmlFor="rp-1">
                                                <input
                                                    type="checkbox"
                                                    id="rp-1"
                                                    name="rp"
                                                />
                                                <div className="checkbox-text">
                                                    Enforce retail price
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox checkbox--no-decor">
                                            <label htmlFor="rp-2">
                                                <input
                                                    type="checkbox"
                                                    id="rp-2"
                                                    name="rp"
                                                />
                                                <div className="checkbox-text">
                                                    Allow for flexible retail
                                                    pricing
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
});

export default SideBar;
