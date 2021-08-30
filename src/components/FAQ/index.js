/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Title from "../Titles/h2"

const faqs = [
  {
    question: "What's it like to work with OAKwave?",
    answer:
      "Our typical process kicks-off when a client approaches us with a growth challenge or problem. They may not fully understand that problem, but they know they have one. After we get to know each other a bit, we typically engage one of two ways. With a strategy, we do a full audit and deep-dive into the challenge and create a roadmap for marketing success for the next three years. The alternative path is a fixed block of hours to be depleted at the client's leisure. We find that most of our clients are most successful by starting with a strategy and following-up with a block of hours to assist with strategic implementation. We even publish our pricing information here, in a very un-agency like move.",
  },
  {
      question: "What industries does OAKwave service?",
      answer: "We service all industries, but we specialize in B2B (though we have had MANY B2C clients as well, it’s just not our core strength). We have a penchant for agency marketing (the cobbler's children have no shoes), franchise sales, SaaS, medical, and manufacturing. But, only because we’ve had clusters of clients in each of those areas. As long as the nature of the challenge is marketing, sales, or business, we’re specialized there. This requires a lot more work on our part, but we know your industry like our own by the end of our process.",
  },
  {
      question: "Why don't you have a more traditional agency website?  What is the deal here?",
      answer:  "If you wanted a more 'traditional' agency, you wouldn't be here.  You've had traditional before.  You learned it sucks.  It's time for something different."
  }
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-transparent">
      <div className="max-w-full px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto divide-y-2 divide-purple">
<Title bgtext="Questions" title="FAQ" />

          <dl className="mt-6 space-y-6 divide-y divide-purple ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-2xl">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-50">
                        <span className="w-full py-10 font-bold montserrat text-gray-50">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-20 w-20 mt-10 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-xl mulish text-gray-50">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
