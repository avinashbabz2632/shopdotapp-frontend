import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import { Datas, categoryDatas } from '../Products/utils';
import BrandHeader from '../common/components/BrandHeader';
import LeftArrowIcon from '../../Brand/images/icons/icon-arrow--left.svg';
import AddImageIcon from '../images/icons/add-image-icon.svg';
import DownIcon from '../images/icons/icon-chevron--down.svg';
import DangerIcon from '../images/icons/icon-danger.svg';
import saveIcon from '../images/icons/save.svg';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Delete from '../images/button.svg';
import info from '../images/icons/icon-info-red.svg';
import { useForm } from 'react-hook-form';

export default function EditProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [variantTogelId, setVariantTogelId] = useState(null);

    const [multipleImages, setMultipleImages] = useState([]);
    const [primaryImage, setPrimaryImage] = useState(0);

    const [text, setText] = useState('');
    const [container, setContainer] = useState(null);
    const [textAlign, setAlign] = useState({ textAlign: 'center' });
    const [product, setProduct] = useState([]);
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState('');
    const [selected, setSelected] = useState({
        category: '',
        subcategory: '',
        group: '',
    });
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();

    const filesFormats = ['image/jpeg', 'image/png'];
    // Functions to preview multiple images
    const changeMultipleFiles = (e) => {
        if (e.target.files) {
            const imageArray = Array.from(e.target.files).map((file) => {
                const isRightFormat = filesFormats.includes(file.type);
                if (isRightFormat) {
                    return URL.createObjectURL(file);
                }
            });
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
        }
    };

    const removeImage = (i) => {
        multipleImages.splice(i, 1);
        setMultipleImages([...multipleImages]);
    };

    const renderProductImages = (data) => {
        return (
            <>
                {data.length > 0 &&
                    data.map((imageUrl, index) => {
                        return (
                            <React.Fragment key={`${index} img`}>
                                <div
                                    className={`${
                                        primaryImage === index ? 'active ' : ''
                                    } pe`}
                                    onClick={() => setPrimaryImage(index)}
                                >
                                    <div className="pe_main">
                                        <div className="pe_body">
                                            <div className="image">
                                                <picture>
                                                    <img
                                                        src={imageUrl}
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="pe_footer">
                                            <div className="pe_radio my_list-table">
                                                <label
                                                    htmlFor={
                                                        'radio-two' + `${index}`
                                                    }
                                                    className="radiobox"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="radio-filter"
                                                        id={
                                                            'radio-two' +
                                                            `${index}`
                                                        }
                                                        value={index}
                                                        onChange={() =>
                                                            setPrimaryImage(
                                                                index
                                                            )
                                                        }
                                                        checked={
                                                            primaryImage ===
                                                            index
                                                        }
                                                        defaultChecked={
                                                            primaryImage ===
                                                            index
                                                        }
                                                    />
                                                    <div className="radiobox-text">
                                                        <span>
                                                            {index === 0 ? (
                                                                <span>
                                                                    Set as Main
                                                                </span>
                                                            ) : (
                                                                <span>
                                                                    Make Primary
                                                                </span>
                                                            )}
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="delete-image">
                                    <img
                                        className="icon"
                                        src={Delete}
                                        onClick={() => removeImage(index)}
                                    />
                                </a>
                            </React.Fragment>
                        );
                    })}
            </>
        );
    };

    const handleVariantToggle = (variantId) => {
        setVariantTogelId(variantId === variantTogelId ? null : variantId);
    };

    const handleDropdownChange = (event, type) => {
        setSelected({ ...selected, [type]: event.target.value });
    };

    useEffect(() => {
        const Data = Datas.find((ele) => ele.id === params.id);
        setProduct(Data);
        setValue('productName', Data.productName);
        setValue('description', Data.description);
        setValue('tags', Data.tags);
        setValue('variants', Data.variants);
        setDescription(Data.description);
        setMultipleImages([Data.productUrl]);
        setValue('productUrl', [Data.productUrl]);
        setTags(Data.tags);
        const containers = document.getElementById('editor') || null;
        setDescription(containers.value);
        setContainer(containers);
    }, []);

    useEffect(() => {
        if (!container) {
            return;
        }
        DecoupledEditor.create(container, {
            alignment: {
                options: ['right', 'left', 'center', 'justify'],
            },
        }).then((editor) => {
            const toolbarContainer = document.getElementById('toolbar');
            const command = editor.commands.get('alignment');
            toolbarContainer.replaceChild(
                editor.ui.view.toolbar.element,
                toolbarContainer.firstChild
            );
            // editor.execute("bold");
            // editor.execute("alignment:left");
            setTimeout(() => {
                command.execute({ value: 'left' });
            });
            command.on('change:value', (evt, name, value) => {
                setText(`[demos] + ${Math.random()}`);
                setAlign({ textAlign: value, textAlignLast: value });
            });
        });
    }, [container]);

    // useEffect(() => {
    //    setEditorLoaded(true);
    // }, []);

    const handleSave = () => {
        product.tags = tags;
        setProduct(product);
        setValue('tags', tags);
        setValue('productUrl', multipleImages);
        const value = getValues();
        console.log('Saved Successfully', value);
        // navigate({
        //     pathname:
        //         navigate(-1) === undefined ?
        //          '/brand/products'
        //             : navigate(-1),
        // });
    };

    const removeTags = (e) => {
        const tagsValue = tags.filter((ele) => ele !== e);
        setTags(tagsValue);
    };

    const handleAddKeyword = (event) => {
        if (event.which == 13 && inputValue != '') {
            setTags([...tags, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="wrapper">
            <BrandHeader />
            <main className="content mp-content edit-product">
                <form onSubmit={handleSubmit(handleSave)}>
                    <section className="section products mp-section">
                        <div className="products_content">
                            <div className="products_head mp-head">
                                <div className="products_head-content">
                                    <div className="title">
                                        <div
                                            onClick={() =>
                                                navigate({
                                                    pathname:
                                                        navigate(-1) ===
                                                        undefined
                                                            ? 'brand/products'
                                                            : navigate(-1),
                                                })
                                            }
                                        >
                                            <NavLink>
                                                <img
                                                    className="icon"
                                                    src={LeftArrowIcon}
                                                />
                                            </NavLink>
                                        </div>
                                        <div className="title">
                                            <h1>
                                                Editing: Summer Activities Chips
                                                for Kids{' '}
                                            </h1>
                                        </div>
                                        <button className="button button-sky-blue remove-all-from-my-list large">
                                            Sync Product from Shopify
                                        </button>
                                    </div>
                                    <button
                                        type="submit"
                                        className="button button-dark black large"
                                        onClick={handleSubmit(handleSave)}
                                    >
                                        <img className="icon" src={saveIcon} />
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                            <div className="products_body light-gray-bg">
                                <div className="products_middle">
                                    <div className="content_area">
                                        <div className="edit-product_area">
                                            <div
                                                className="alert alert-error d-flex align-items-center"
                                                role="alert"
                                            >
                                                <img
                                                    className="icon"
                                                    src={info}
                                                ></img>
                                                <div>
                                                    Unfortunately, the syncing
                                                    of the product was not
                                                    successful. Please try
                                                    again.
                                                </div>
                                            </div>

                                            <div
                                                className="alert alert-warning d-flex align-items-start"
                                                role="alert"
                                            >
                                                <img
                                                    className="icon"
                                                    src={DangerIcon}
                                                />
                                                <div className="notes">
                                                    <div>
                                                        Please fill this
                                                        required field:{' '}
                                                        <a href="#">
                                                            Product Category
                                                        </a>
                                                    </div>
                                                    <div>
                                                        Please sync{' '}
                                                        <a href="#">SKU</a> from
                                                        your Shopify Store
                                                    </div>
                                                    <div>
                                                        Please enter{' '}
                                                        <a href="#">WSP</a>
                                                    </div>
                                                    <div>
                                                        Please enter{' '}
                                                        <a href="#">MSRP</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="alert alert-warning d-flex align-items-center"
                                                role="alert"
                                            >
                                                <div className="alert-warning-title">
                                                    You must complete the
                                                    following configurations
                                                    before updating the details
                                                    of a product
                                                    <ul>
                                                        <li>Brand Profile</li>
                                                        <li>Getting Paid</li>
                                                    </ul>
                                                    <button className="button button-white close">
                                                        Go to Settings
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="edit-product_tabs">
                                                <div id="product-info">
                                                    <div className="pi-area">
                                                        <div className="product-item-left">
                                                            <div className="product-item-list">
                                                                <div className="bd-callout mt-0">
                                                                    Product Info
                                                                    <span className="asterisk-red">
                                                                        *
                                                                    </span>
                                                                </div>
                                                                <div className="form-input">
                                                                    <label
                                                                        htmlFor="Productname"
                                                                        className="form-label"
                                                                    >
                                                                        Product
                                                                        name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control is-invalid"
                                                                        id="Productname"
                                                                        placeholder="Summer Activities Chips for Kids"
                                                                        // value={
                                                                        //     product.productName
                                                                        // }
                                                                        {...register(
                                                                            'productName'
                                                                        )}
                                                                    />
                                                                </div>
                                                                <div className="form-input">
                                                                    <label
                                                                        htmlFor="ProductDescription"
                                                                        className="form-label"
                                                                    >
                                                                        Product
                                                                        description
                                                                    </label>
                                                                    <div className="editor">
                                                                        <div className="content-info-">
                                                                            <div
                                                                                data-editor="ClassicEditor"
                                                                                data-collaboration="false"
                                                                                data-revision-history="false"
                                                                            >
                                                                                <main>
                                                                                    <div className="text-add">
                                                                                        <p></p>
                                                                                        <div id="toolbar">
                                                                                            <i></i>
                                                                                        </div>
                                                                                        <div
                                                                                            className="text-editor"
                                                                                            id="editor"
                                                                                            onChange={(
                                                                                                event
                                                                                            ) => {
                                                                                                setDescription(
                                                                                                    event
                                                                                                        .target
                                                                                                        .value
                                                                                                );
                                                                                                console.log(
                                                                                                    event
                                                                                                        .target
                                                                                                        .value
                                                                                                );
                                                                                            }}
                                                                                            {...register(
                                                                                                'description'
                                                                                            )}
                                                                                        >
                                                                                            <div className="centered">
                                                                                                <div className="">
                                                                                                    <div className="editor-container">
                                                                                                        <div className="editor">
                                                                                                            <p>
                                                                                                                {
                                                                                                                    description
                                                                                                                }
                                                                                                            </p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </main>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-item-list">
                                                                <div id="product-images">
                                                                    <div className="pm-area">
                                                                        <div className="bd-callout mt-0">
                                                                            Product
                                                                            Images{' '}
                                                                            <span>
                                                                                (12)
                                                                            </span>
                                                                            <span className="asterisk-red">
                                                                                *
                                                                            </span>
                                                                        </div>
                                                                        <div className="product-images product-images pi-radio">
                                                                            {/* The render function with the multiple image state */}
                                                                            {renderProductImages(
                                                                                multipleImages
                                                                            )}
                                                                        </div>

                                                                        <div className="upload-image-area">
                                                                            <img
                                                                                src={
                                                                                    AddImageIcon
                                                                                }
                                                                            />
                                                                            <p className="dragBox">
                                                                                Drag
                                                                                &amp;
                                                                                drop
                                                                                image
                                                                                to
                                                                                upload
                                                                                (max.
                                                                                file
                                                                                size
                                                                                20
                                                                                MB
                                                                                per
                                                                                image)
                                                                                <input
                                                                                    type="file"
                                                                                    name="file"
                                                                                    multiple
                                                                                    {...register(
                                                                                        'file',
                                                                                        {
                                                                                            required: false,
                                                                                            validate:
                                                                                                {
                                                                                                    lessThan20MB:
                                                                                                        (
                                                                                                            files
                                                                                                        ) =>
                                                                                                            files[0]
                                                                                                                ?.size <
                                                                                                                30000 ||
                                                                                                            'Max 30kb',
                                                                                                    acceptedFormats:
                                                                                                        (
                                                                                                            files
                                                                                                        ) =>
                                                                                                            [
                                                                                                                'image/jpeg',
                                                                                                                'image/png',
                                                                                                                'image/gif',
                                                                                                            ].includes(
                                                                                                                files[0]
                                                                                                                    ?.type
                                                                                                            ),
                                                                                                },
                                                                                        }
                                                                                    )}
                                                                                    onChange={
                                                                                        changeMultipleFiles
                                                                                    }
                                                                                />
                                                                            </p>
                                                                            <label
                                                                                htmlFor="uploadFile"
                                                                                className="button button-white"
                                                                            >
                                                                                Upload
                                                                                Image
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-item-right">
                                                            <div className="product-item-list mt-0 pdc-area">
                                                                <div className="bd-callout mt-0 mb-2">
                                                                    Product
                                                                    Category{' '}
                                                                    <span className="asterisk-red">
                                                                        *
                                                                    </span>
                                                                </div>
                                                                <p className="productc-note">
                                                                    Assigning
                                                                    the Product
                                                                    Category
                                                                    will help
                                                                    retailers
                                                                    find your
                                                                    products.
                                                                </p>
                                                                <div className="form-data">
                                                                    <select
                                                                        value={
                                                                            selected.category
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleDropdownChange(
                                                                                event,
                                                                                'category'
                                                                            )
                                                                        }
                                                                    >
                                                                        <option value="">
                                                                            Select
                                                                            a
                                                                            category
                                                                        </option>
                                                                        {categoryDatas.map(
                                                                            (
                                                                                category
                                                                            ) => (
                                                                                <option
                                                                                    key={
                                                                                        category.id
                                                                                    }
                                                                                    value={
                                                                                        category.value
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        category.value
                                                                                    }
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>
                                                                    <select
                                                                        disabled={
                                                                            !selected.category
                                                                        }
                                                                        value={
                                                                            selected.subcategory
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleDropdownChange(
                                                                                event,
                                                                                'subcategory'
                                                                            )
                                                                        }
                                                                    >
                                                                        <option value="">
                                                                            Select
                                                                            a
                                                                            subcategory
                                                                        </option>
                                                                        {categoryDatas
                                                                            .find(
                                                                                (
                                                                                    category
                                                                                ) =>
                                                                                    category.value ===
                                                                                    selected.category
                                                                            )
                                                                            ?.sub_category.map(
                                                                                (
                                                                                    subcategory
                                                                                ) => (
                                                                                    <option
                                                                                        key={
                                                                                            subcategory.id
                                                                                        }
                                                                                        value={
                                                                                            subcategory.value
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            subcategory.value
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                    </select>
                                                                    <select
                                                                        disabled={
                                                                            !selected.subcategory
                                                                        }
                                                                        value={
                                                                            selected.group
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleDropdownChange(
                                                                                event,
                                                                                'group'
                                                                            )
                                                                        }
                                                                    >
                                                                        <option value="">
                                                                            Select
                                                                            a
                                                                            group
                                                                        </option>
                                                                        {categoryDatas
                                                                            .find(
                                                                                (
                                                                                    category
                                                                                ) =>
                                                                                    category.value ===
                                                                                    selected.category
                                                                            )
                                                                            ?.sub_category.find(
                                                                                (
                                                                                    subcategory
                                                                                ) =>
                                                                                    subcategory.value ===
                                                                                    selected.subcategory
                                                                            )
                                                                            ?.group.map(
                                                                                (
                                                                                    group
                                                                                ) => (
                                                                                    <option
                                                                                        key={
                                                                                            group.id
                                                                                        }
                                                                                        value={
                                                                                            group.value
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            group.value
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="product-shipping"
                                                                className="product-item-list mt-4"
                                                            >
                                                                <div className="pv-area">
                                                                    <div className="bd-callout mt-0 mb-0">
                                                                        Days to
                                                                        Fulfill{' '}
                                                                        <span className="asterisk-red">
                                                                            *
                                                                        </span>
                                                                    </div>

                                                                    <div className="shipping-fee-form">
                                                                        <div className="fee-area mb-0 mt-2">
                                                                            <div className="form-input radio-input">
                                                                                <label
                                                                                    htmlFor="Productname"
                                                                                    className="form-label"
                                                                                ></label>
                                                                                <div className="time-radio-group mb-2">
                                                                                    <div className="category-data">
                                                                                        <div className="checkbox checkbox--no-decor">
                                                                                            <label htmlFor="time-1">
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    id="time-1"
                                                                                                    name="p-tag"
                                                                                                    value="3-7"
                                                                                                    {...register(
                                                                                                        'daysToFulfill'
                                                                                                    )}
                                                                                                />
                                                                                                <div className="checkbox-text">
                                                                                                    <span className="category-name">
                                                                                                        3-7
                                                                                                    </span>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="checkbox checkbox--no-decor">
                                                                                            <label htmlFor="time-2">
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    id="time-2"
                                                                                                    name="p-tag"
                                                                                                    value="7-14"
                                                                                                    {...register(
                                                                                                        'daysToFulfill'
                                                                                                    )}
                                                                                                />
                                                                                                <div className="checkbox-text">
                                                                                                    <span className="category-name">
                                                                                                        {
                                                                                                            ''
                                                                                                        }
                                                                                                        7-14
                                                                                                    </span>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="checkbox checkbox--no-decor">
                                                                                            <label htmlFor="time-3">
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    id="time-3"
                                                                                                    name="p-tag"
                                                                                                    value="14-21"
                                                                                                    {...register(
                                                                                                        'daysToFulfill'
                                                                                                    )}
                                                                                                />
                                                                                                <div className="checkbox-text">
                                                                                                    <span className="category-name">
                                                                                                        14-21
                                                                                                    </span>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="checkbox checkbox--no-decor">
                                                                                            <label htmlFor="time-4">
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    id="time-4"
                                                                                                    name="p-tag"
                                                                                                    value="21"
                                                                                                    {...register(
                                                                                                        'daysToFulfill'
                                                                                                    )}
                                                                                                />
                                                                                                <div className="checkbox-text">
                                                                                                    <span className="category-name">
                                                                                                        {' '}
                                                                                                        &gt;
                                                                                                        21
                                                                                                    </span>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="product-tag">
                                                                <div className="pa-title">
                                                                    <h3>
                                                                        Tags
                                                                    </h3>
                                                                </div>
                                                                <p className="tag-note">
                                                                    Only you as
                                                                    a Brand will
                                                                    be able to
                                                                    view these
                                                                    tags.
                                                                </p>
                                                                <input
                                                                    type="text"
                                                                    className="tag-text"
                                                                    placeholder="Add tag"
                                                                    {...register(
                                                                        'tags'
                                                                    )}
                                                                    value={
                                                                        inputValue ||
                                                                        ''
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setInputValue(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    onKeyUp={(
                                                                        e
                                                                    ) =>
                                                                        handleAddKeyword(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                                <div className="tab-list">
                                                                    {product.length !==
                                                                        0 &&
                                                                        tags.length !==
                                                                            0 &&
                                                                        tags.map(
                                                                            (
                                                                                e,
                                                                                i
                                                                            ) => (
                                                                                <div
                                                                                    className="checkbox checkbox--no-decor m-1"
                                                                                    key={`${i} tags`}
                                                                                >
                                                                                    <label className="tag-lbl">
                                                                                        <div
                                                                                            className="checkbox-text"
                                                                                            key={`${i} close`}
                                                                                        >
                                                                                            {
                                                                                                e
                                                                                            }
                                                                                            <span
                                                                                                className="closebtn"
                                                                                                onClick={() =>
                                                                                                    removeTags(
                                                                                                        e
                                                                                                    )
                                                                                                }
                                                                                            >
                                                                                                ×
                                                                                            </span>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="product-variants"
                                                    className="product-item-list"
                                                >
                                                    <div className="pv-area">
                                                        <div className="bd-callout mt-0 mb-4">
                                                            Product Variants (4){' '}
                                                            <span className="asterisk-red">
                                                                *
                                                            </span>
                                                        </div>
                                                        <div
                                                            className="alert alert-primary d-flex align-items-center"
                                                            role="alert"
                                                        >
                                                            <img
                                                                className="icon-Blue"
                                                                src={info}
                                                            ></img>
                                                            <div>
                                                                You must include
                                                                at least one (1)
                                                                product variant.
                                                                SKU, WSP, and
                                                                MSRP are
                                                                required fields.
                                                            </div>
                                                        </div>
                                                        <div className="v-table pv-update">
                                                            <table className="table table-vars">
                                                                <thead className="sticky-thead">
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                Material
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                Color
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                SKU
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                Barcode
                                                                                <div className="tooltip">
                                                                                    <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                                                                        <img
                                                                                            className="icon-info"
                                                                                            src={
                                                                                                info
                                                                                            }
                                                                                        ></img>
                                                                                    </div>
                                                                                    <div className="tooltip_text">
                                                                                        <p>
                                                                                            ISBN,
                                                                                            UPC,
                                                                                            GTIN,
                                                                                            ...
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                Stock
                                                                                <div className="tooltip">
                                                                                    <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                                                                        <img
                                                                                            className="icon-info"
                                                                                            src={
                                                                                                info
                                                                                            }
                                                                                        ></img>
                                                                                    </div>
                                                                                    <div className="tooltip_text">
                                                                                        <p>
                                                                                            The
                                                                                            inventory
                                                                                            published
                                                                                            within
                                                                                            ShopDot
                                                                                            is
                                                                                            based
                                                                                            on
                                                                                            the
                                                                                            inventory
                                                                                            from
                                                                                            your
                                                                                            Shopify
                                                                                            store
                                                                                            x
                                                                                            the
                                                                                            inventory
                                                                                            buffer
                                                                                            that
                                                                                            you
                                                                                            set
                                                                                            under
                                                                                            Settings-Preferences.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="txt">
                                                                                WSP
                                                                                <div className="tooltip">
                                                                                    <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                                                                        <img
                                                                                            className="icon-info"
                                                                                            src={
                                                                                                info
                                                                                            }
                                                                                        ></img>
                                                                                    </div>
                                                                                    <div className="tooltip_text">
                                                                                        <p>
                                                                                            WSP
                                                                                            stands
                                                                                            for
                                                                                            Wholesale
                                                                                            Price.
                                                                                            This
                                                                                            is
                                                                                            the
                                                                                            price
                                                                                            that
                                                                                            retailers
                                                                                            pay
                                                                                            brands.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>

                                                                        <th>
                                                                            <div className="txt">
                                                                                MSRP
                                                                                <button className="sort">
                                                                                    <img
                                                                                        className="icon"
                                                                                        src={
                                                                                            DownIcon
                                                                                        }
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </th>
                                                                        <th>
                                                                            <div className="product-activation">
                                                                                <span>
                                                                                    Allow
                                                                                </span>
                                                                                <div className="my-toggle-btn">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id="checkbox11"
                                                                                    />
                                                                                    <label htmlFor="checkbox11">
                                                                                        <span
                                                                                            className="on"
                                                                                            title="on"
                                                                                        ></span>
                                                                                        <span
                                                                                            className="off"
                                                                                            title="off"
                                                                                        ></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="tooltip">
                                                                                    <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                                                                        <img
                                                                                            className="icon-info"
                                                                                            src={
                                                                                                info
                                                                                            }
                                                                                        ></img>
                                                                                    </div>
                                                                                    <div className="tooltip_text">
                                                                                        <p>
                                                                                            Select
                                                                                            variants
                                                                                            you
                                                                                            want
                                                                                            to
                                                                                            allow
                                                                                            for
                                                                                            ShopDot.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="scroll-table">
                                                                    {product.length !==
                                                                        0 &&
                                                                        product.variants?.map(
                                                                            (
                                                                                item,
                                                                                i
                                                                            ) => (
                                                                                <tr
                                                                                    key={`${
                                                                                        product?.id
                                                                                    } product ${new Date().getTime()}`}
                                                                                >
                                                                                    <td>
                                                                                        <div className="image image--cover image--1-1">
                                                                                            <picture>
                                                                                                <img
                                                                                                    src={
                                                                                                        item?.productUrl
                                                                                                    }
                                                                                                    alt="img"
                                                                                                />
                                                                                            </picture>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            {
                                                                                                item?.material
                                                                                            }
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            {
                                                                                                item?.color
                                                                                            }
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt vin-txt">
                                                                                            {
                                                                                                item?.sku
                                                                                            }
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            {
                                                                                                item?.barcode
                                                                                            }
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            {
                                                                                                item?.stock
                                                                                            }
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="tabel-text is-invalid"
                                                                                                {...register(
                                                                                                    `variants.${i}.wsp`
                                                                                                )}
                                                                                                // placeholder="0.00"
                                                                                            />
                                                                                        </div>
                                                                                    </td>

                                                                                    <td>
                                                                                        <div className="txt">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="tabel-text is-invalid"
                                                                                                {...register(
                                                                                                    `variants.${i}.msrp`
                                                                                                )}
                                                                                                //placeholder="0.00"
                                                                                            />
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="product-activation">
                                                                                            <span>
                                                                                                Allow
                                                                                            </span>
                                                                                            <div className="my-toggle-btn">
                                                                                                <input
                                                                                                    id={`checkbox${item?.id}`}
                                                                                                    type="checkbox"
                                                                                                    checked={
                                                                                                        item?.id ===
                                                                                                        variantTogelId
                                                                                                            ? true
                                                                                                            : false
                                                                                                    }
                                                                                                    onClick={() =>
                                                                                                        handleVariantToggle(
                                                                                                            item?.id
                                                                                                        )
                                                                                                    }
                                                                                                />
                                                                                                <label
                                                                                                    htmlFor={`checkbox${item?.id}`}
                                                                                                >
                                                                                                    <span
                                                                                                        className="on"
                                                                                                        title="on"
                                                                                                    ></span>
                                                                                                    <span
                                                                                                        className="off"
                                                                                                        title="off"
                                                                                                    ></span>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </main>
        </div>
    );
}
