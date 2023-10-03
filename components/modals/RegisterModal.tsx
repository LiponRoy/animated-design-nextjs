"use client"
import useRegisterModalStore from "@/hooks/useRegisterModal";
import React from "react";
import Modal from "./Modal";
import Input from "./Input";

const RegisterModal = () => {
  const registerModalStore = useRegisterModalStore();

  const bodyContent = (
    <div className="">
      <Input placeHolder="Name"/>
      <Input placeHolder="Email"/>
      <Input placeHolder="Password"/>
    </div>
  );

  const footerContent = (
    <div className="">
      <span>
        distinctio recusandae accusamus iure tenetur cupiditate! A ipsum
        explicabo asperiores tempore facere dolorum, placeat magnam facilis.
        Vitae.
      </span>
    </div>
  );

  return (
    <Modal
        open={registerModalStore.isOpen}
        onClose={registerModalStore.onClose}
        onOk={registerModalStore.onClose}
        title="Register Model"
        body={bodyContent}
        footer={footerContent}
      ></Modal>
  );
};

export default RegisterModal;
