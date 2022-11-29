import React, { useState } from "react";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import Logo from "../../images/webmall-logo.jpg";
import { Spinner, FormGroup } from "reactstrap";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const REGISTER_URL = "admin/admin-register";

const Register = ({ history }) => {
  const [passState, setPassState] = useState(false);
  // const [pass2State, setPass2State] = useState(false);
  const [loading, setLoading] = useState(false);
  const { errors, register, handleSubmit } = useForm();
  const [inventoryManager_email, setInventoryManager_email] = useState("");
  const [inventoryManager_password, setInventoryManager_password] = useState("");
  // const [password2, setPassword2] = useState("");
  const [inventoryManager_name, setInventoryManager_name] = useState("");
  // const [last_name, setLast_name] = useState("");

  // TODO: fix error on CORS
  // connect signin api and forgot password API
  const handleFormSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ inventoryManager_name, inventoryManager_email, inventoryManager_password }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
        );
        console.log(response.json());
        setTimeout(() => history.push(`${process.env.PUBLIC_URL}/auth-success`), 2000);
    } catch (e) {

    }
    // 
  };
  return (
    <React.Fragment>
      <Head title="Register" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              {/* <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={Logo} alt="logo-dark" /> */}
              <p>Belkins Logo</p>
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Register Inventory Manager</BlockTitle>
                <BlockDes>
                  <p>Belkins Store Inventory</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
              <FormGroup>
                <label className="form-label" htmlFor="name">
                  Inventory Manager Name
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="inventoryManager_name"
                    name="inventoryManager_name"
                    placeholder="Enter Inventory Manager Name"
                    value={inventoryManager_name}
                    onChange={(e) => setInventoryManager_name(e.target.value)}
                    ref={register({ required: true })}
                    className="form-control-lg form-control"
                  />
                  {errors.name && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              {/* <FormGroup>
                <label className="form-label" htmlFor="name">
                  Last Name
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter last name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    ref={register({ required: true })}
                    className="form-control-lg form-control"
                  />
                  {errors.name && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup> */}
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                  Inventory Manager Email
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="email"
                    bssize="lg"
                    id="default-01"
                    name="inventoryManager_email"
                    ref={register({ required: true })}
                    className="form-control-lg form-control"
                    placeholder="Enter your email address"
                    value={inventoryManager_email}
                    onChange={(e) => setInventoryManager_email(e.target.value)}
                  />
                  {errors.email && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    id="inventoryManager_password"
                    name="inventoryManager_password"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your password"
                    value={inventoryManager_password}
                    onChange={(e) => setInventoryManager_password(e.target.value)}
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>
              </FormGroup>
              {/* <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Confirm Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPass2State(!pass2State);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${pass2State ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={pass2State ? "text" : "password"}
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    ref={register({ required: "This field is required" })}
                    placeholder="Confirm Password"
                    className={`form-control-lg form-control ${pass2State ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>
              </FormGroup> */}
              <FormGroup>
                <Button type="submit" color="primary" size="lg" className="btn-block">
                  {loading ? <Spinner size="sm" color="light" /> : "Register"}
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              {" "}
              Already have an account?{" "}
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                <strong>Sign in instead</strong>
              </Link>
            </div>
            {/* <div className="text-center pt-4 pb-3">
              <h6 className="overline-title overline-title-sap">
                <span>OR</span>
              </h6>
            </div>
            <ul className="nav justify-center gx-8">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Google
                </a>
              </li>
            </ul> */}
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Register;
