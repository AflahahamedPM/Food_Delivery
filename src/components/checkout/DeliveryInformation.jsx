import React from "react";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const DeliveryInformation = ({ deliveryDetails, setDeliveryDetails }) => {
  const handleInputChange = (value, fieldName) => {
    setDeliveryDetails((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="sm:w-6/12 gap-4 bg-white p-4 border border-gray-200 rounded-lg mb-4">
      <p className="font-semibold sm:text-2xl text-xl mb-3">Delivery Information</p>
      <Separator />
      <Label className="mb-2 mt-3 text-md">Full Name</Label>
      <Input
        placeholder="John Doe"
        className="h-10"
        value={deliveryDetails?.fullName}
        onChange={(e) => handleInputChange(e.target.value, "fullName")}
      />
      <Label className="mb-2 mt-3 text-md">Address</Label>
      <Input
        placeholder=""
        className="h-10"
        value={deliveryDetails?.address}
        onChange={(e) => handleInputChange(e.target.value, "address")}
      />
      <div className="sm:flex justify-between">
        <div>
          <Label className="mb-2 mt-3 text-md">City</Label>
          <Input
            placeholder="Calicut"
            className="h-10"
            value={deliveryDetails?.city}
            onChange={(e) => handleInputChange(e.target.value, "city")}
          />
        </div>
        <div>
          <Label className="mb-2 mt-3 text-md">State</Label>
          <Input
            placeholder="Kerala"
            className="h-10"
            value={deliveryDetails?.state}
            onChange={(e) => handleInputChange(e.target.value, "state")}
          />
        </div>
      </div>
      <div className="sm:flex justify-between">
        <div>
          <Label className="mb-2 mt-3 text-md">Mobile</Label>
          <Input
            className="h-10"
            value={deliveryDetails?.mobileNo}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value?.length <= 10) {
                handleInputChange(value, "mobileNo");
              }
            }}
          />
        </div>

        <div>
          <Label className="mb-2 mt-3 text-md">Email</Label>
          <Input
            placeholder="example@gmail.com"
            className="h-10"
            value={deliveryDetails?.email}
            onChange={(e) => handleInputChange(e.target.value, "email")}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
