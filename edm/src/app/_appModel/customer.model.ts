export interface userModel {
    FullName?: any,
    Email?: any,
    Mobile?: any,
    Password?: any,
    RePassword?: any,
    Role?: any,
    User_Code?: any,
    IsGuestUser?: any,
    Gender?: any,
    Bio?: any,
    DateOfBirth?: any,
    Website?: any,
    Ref_User_Id?: any,
    Ref_GuestUser_ID?: any,
    CreatedBy?: any,
    UpdatedBy?: any
}
export interface requestOTP {
    Ref_OTP_ID?: any,
    Ref_User_ID?: any,
    OTP?: any,
    Flag?: any,
    Type?: any,
    IsValidate?: any,
}