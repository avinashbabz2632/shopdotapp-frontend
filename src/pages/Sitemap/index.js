import React from 'react';
import './sitemap.style.scss';
import { Link } from 'react-router-dom';

export default function SiteMap() {
  return (
    <div className="site-wrapper">
      <h1 className="site-heading"> Shopdot site-map</h1>
      <section className="site-section">
        <ul>
          <p className="site-title">Brand</p>
          <li>
            <Link className="site-link" to="/brand/setting" target="_blank">
              Brands Integration
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/profile"
              target="_blank"
            >
              Brands Profile
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/preference"
              target="_blank"
            >
              Brands Preference
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/paid"
              target="_blank"
            >
              Brands Paid
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/shipping"
              target="_blank"
            >
              Brands Shipping
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/users"
              target="_blank"
            >
              Brands Users
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/security"
              target="_blank"
            >
              Brands Security
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/brand/setting/notification"
              target="_blank"
            >
              Brands Notification
            </Link>
          </li>
        </ul>
        <ul>
          <p className="site-title">Retailer</p>
          <li>
            <Link className="site-link" to="/retailer/setting" target="_blank">
              Retailer Integration
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/retailer/setting/billing"
              target="_blank"
            >
              Retailer Billing
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/retailer/setting/profile"
              target="_blank"
            >
              Retailer Profile
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/retailer/setting/users"
              target="_blank"
            >
              Retailer Users
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/retailer/setting/security"
              target="_blank"
            >
              Retailer Security
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/retailer/setting/notification"
              target="_blank"
            >
              Retailer Notification
            </Link>
          </li>
        </ul>
        <ul>
          <p className="site-title">Auth</p>
          <li>
            <Link className="site-link" to="/sign-up" target="_blank">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="site-link" to="/reset-password" target="_blank">
              Reset Password
            </Link>
          </li>
          <li className="last-child">
            <Link className="site-link" to="/forgot-password" target="_blank">
              Forgot Password
            </Link>
          </li>

          <p className="site-title">Onbording</p>
          <li>
            <Link className="site-link" to="/create-account" target="_blank">
              Create Account
            </Link>
          </li>
          <li>
            <Link className="site-link" to="/verify-email" target="_blank">
              Verify Email
            </Link>
          </li>
          <li>
            <Link className="site-link" to="/personalize" target="_blank">
              Personalized
            </Link>
          </li>
          <li>
            <Link
              className="site-link"
              to="/personalized-not-supported"
              target="_blank"
            >
              Personalized Not Supported
            </Link>
          </li>
          <li>
            <Link className="site-link" to="/brand-onboarding" target="_blank">
              Brand Onbording
            </Link>
          </li>
          <li>
            <Link className="site-link" to="/personalize" target="_blank">
              Personalized
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
