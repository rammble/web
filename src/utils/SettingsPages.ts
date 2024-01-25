export const SettingsPages = {
  account: {
    page: {
      title: 'Your account',
      description:
        'See information about your account, change your username or disable your account.',
      path: '/settings/account',
      icon: 'UserIcon',
    },
    subPages: [
      {
        title: 'Account information',
        description:
          'See your account information like your phone number and email address.',
        path: '/settings/account/profile',
        icon: 'UserIcon',
      },
      {
        title: 'Security and account access',
        description:
          'Manage your account’s security and keep track of your login and usage.',
        path: '/settings/account/security',
        icon: 'LockIcon',
      },
      {
        title: 'Premium',
        description:
          'Support Rammble as we try and build the best social platform yet to be.',
        path: '/settings/account/premium',
        icon: 'FilledHeartIcon',
      },
    ],
  },
  security: {
    page: {
      title: 'Security and account access',
      description:
        'Manage your account’s security and keep track of your login and usage.',
      path: '/settings/security',
      icon: 'LockIcon',
    },
    subPages: [],
  },
  premium: {
    page: {
      title: 'Premium',
      description:
        'Support Rammble as we try and build the best social platform yet to be.',
      path: '/settings/premium',
      icon: 'FilledHeartIcon',
    },
    subPages: [],
  },
  privacy: {
    page: {
      title: 'Premium',
      description: 'Manage what information is shared to others on Rammble.',
      path: '/settings/privacy',
      icon: 'ShieldTickIcon',
    },
    subPages: [],
  },
  notifications: {
    page: {
      title: 'Notifications',
      description:
        'Select the kinds of notifications you get about your activities, interests and recommendations.',
      path: '/settings/notifications',
      icon: 'NotificationIcon',
    },
    subPages: [],
  },
  accessibility: {
    page: {
      title: 'Accessibility, display and languages',
      description: 'Manage how Rammble content is displayed to you.',
      path: '/settings/notifications',
      icon: 'AccessibilityIcon',
    },
    subPages: [],
  },
}
