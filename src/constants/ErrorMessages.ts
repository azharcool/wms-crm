const ErrorMessages = {
  login: {
    email: "Please enter your email",
    password: "Please enter your password",
    success: "Logged successful",
  },
  team: {
    fullName: "Please enter your full name",
    email: "Please enter your email",
    role: "Please select role",
    password: "Please enter your password",
    password_matches:
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
    success: "Logged successful",
    validate: {
      fullName: "name can not be a number",
      email: "Please enter a valid email address",
    },
  },
  screens: {
    name: "Please enter screen name",
    code: "Please enter screen code",
    url: "Please enter screen url",
    invalid_url: "Please enter correct url",
  },
  pipeline: {
    name: "Please enter pipeline name",
  },
  formBuilder: {
    label: "Please enter label ",
  },
  roles: {
    name: "Please enter role name",
  },
  leadSource: {
    name: "Please enter  name",
  },
  leadStatus: {
    name: "Please enter name",
  },
  screensAccess: {
    role: "Please select role",
  },
  permissions: {
    screen: "Please select screen",
    permission: "Please enter permission",
    permissionDesc: "Please enter permission description",
    permissionCode: "Please enter permission code",
    screenUrl: "Please enter screen url",
    screenCode: "Please enter screen code",
  },
  forgotPassword: {
    resetLink: "We have e-mailed Your password reset link!",
    password_Change: "Password changed successfully",
    confirmPassword: "Your passwords do not match.",
  },
  setting: {
    notion_token: "Please enter notion token",
  },
  pages: {
    pageName: "Please enter page name",
    pageCode: "Please enter page code provided by notion.io",
  },
  forms: {
    title: "Please enter form title",
    desc: "Please enter form description",
  },
  pages_access: {
    pageId: "Please select page.",
    userId: "Please select user",
  },
  address: {
    address: "please enter address",
    success: "Address added successfully!!",
    updated: "Address updated successfully!!",
    deleted: "Address deleted successfully!!",
  },
  add_contact: {
    // Contact Info
    firstName: {
      firstName: "Please enter your first name.",
      validate: "First name can not be a number.",
    },
    lastName: {
      lastName: "Please enter your last name.",
      validate: "Last name can not be a number.",
    },
    number: {
      phone: "please enter your phone number.",
      mobile: "please enter your mobile number.",
      max: "Number cannot exceed 10 digits.",
      validate: "Number cannot be string or characters.",
    },
    // mobile: "please enter your mobile no",
    email: "Please enter your email",
    secondEmail: "Please enter your 2nd email",
    companyName: "Please enter company name",
    companyWebsite: "please enter company website",
    salesRep: "please select sales rep",
    entityType: "please select entity type",
    leadStatus: "please select lead status",
    pipelineLead: "please select pipeline lead",
    followUp: "please select follow up",
    recordOwner: "please select record owner",
    leadSource: "please select lead source",
    emailFollowUpOptions: "please select email follow up options",
    role: "please select role",
    description: "please enter description",
    referredBy: "select referral",
    dateContractsSent: "please enter date contract sent",
    taxId: "please enter tax id",
    seqStartDate: "please select seq start date",

    // Address
    googleAddress: "please enter google location",
    street: "please enter street",
    state: "please enter state",
    city: "please enter city",
    zipCode: "please enter zip code",
    country: "please enter country",

    // Contract Data
    serviceAgreementMonth: "please enter service agreement month",
    setupFree: "please enter setup free",
    employeesType: "please select empolyee type",
    serviceAgreementDays: "please select service agreement in days",
    hoursDayWorked: "please select hours per day worked",
    virtualEmployees: "please select virtual employees",
    rate: "please enter rate",
    totalHoursMonth: "please select total hours per month",
    perApptFee: "please enter PER APPT FEE",
    totalHoursCycle: "please enter total hours per cycle",
    daysPriorCancel: "please enter days prior to cancel",

    // CC(credit card)
    ccName: "please enter your name",
    type: "please select type",
    cardNumber: "please enter card number",
    expiryDate: "please enter expiry date",
    security: "please enter security (cvv)",
    address: "please enter address",
    dateOfPayment: "please enter date of payment",
  },

  create_contact: {
    listName: "please enter list name",
    listDescription: "please enter list description",
  },
  create_deal: {
    dealTitle: "please enter deal title",
    dealValue: "please enter deal value",
    selectPipLine: "please select ppipline",
    selectStorage: "please select storage ",
    estimateCloseDate: "please select estimate close date",
  },
  notes: {
    addNotes: "please add note",
    success: "Note added successfully!!",
    updated: "Note updated successfully!!",
    deleted: "Note deleted successfully!!",
  },

  edit_contact: {
    firstName: "please enter your first name.",
    lastName: "please enter your last name.",
    email: "please enter your email",
    phoneNumber: "please enter phone number",
    lastContacted: "please enter last connected",
    leadStatus: "please select lead status",
    success: "Contact updated successfully!!",
  },
  activity: {
    activityTypeId: "Please select activity type",
    title: "Please enter your title",
    description: "please select description",
    assignTo: "please select who to assign",
    duration: "please select duration",
    date: "please select date",
    time: "please select time",
    contactName: "please enter contact name",
    setReminderBefore: "please enter before meeting min",
    success: "Activity added successfully!!",
    updated: "Activity updated successfully!!",
    deleted: "Activity deleted successfully!!",
  },
  other: {
    preference: "Preference saved successfully!!",
  },
};

export default ErrorMessages;
