export const CONTRACT_URL = 'https://www.scottishwidows.co.uk/contact-us.html'

export type FaqItem = {
  q: string
  a: string
}

export type FaqSection = {
  title: string
  items: FaqItem[]
}

export const faqSections: FaqSection[] = [
  {
    title: 'Insurance',
    items: [
      {
        q: 'What is covered by my insurance policy?',
        a: 'Coverage depends on your selected policy and optional benefits. Core coverage typically includes defined events listed in your policy schedule, with exclusions in the terms.'
      },
      {
        q: 'How do I make a claim?',
        a: 'Start a claim by contacting support with your policy number, date of event, and supporting documents. Claims are then assessed against your policy terms.'
      }
    ]
  },
  {
    title: 'Protection',
    items: [
      {
        q: 'What is the difference between life cover and critical illness cover?',
        a: 'Life cover usually pays out on death during the policy term. Critical illness cover pays out if you’re diagnosed with a specified serious condition that meets policy definitions.'
      },
      {
        q: 'Can I change my level of protection later?',
        a: 'Some policies allow changes (for example, increasing or reducing cover), subject to underwriting and product rules at the time of change.'
      }
    ]
  },
  {
    title: 'Investments',
    items: [
      {
        q: 'How is investment risk explained?',
        a: 'Investment options are normally grouped by risk profile. Higher potential returns can come with higher volatility and potential loss, depending on market conditions.'
      },
      {
        q: 'Can I switch funds after I invest?',
        a: 'Fund switching may be available depending on your product terms, notice periods, and any applicable charges.'
      }
    ]
  }
]
