## Inspiration
We were inspired by [this CNBC video](https://www.cnbc.com/video/2021/10/12/carbon-offset-investments-on-track-to-hit-record-level-in-2021.html) that explained how the Carbon Offset industry is one of the fastest-growing sectors. We felt that the current solutions on the market were underwhelming and thus saw an opportunity to streamline the process while also helping the environment.

## What it does
Carbon Back connects verified atmospheric CO2 removers and businesses of any size looking to offset their footprint. Generally, farms are the most common sellers of carbon credits. They already use relatively cheap land, and crops are naturally great photosynthesizers. After verification of land ownership and ability to offset CO2 (the *only* manual part of the process), sellers can supply Carbon Credits (1 credit = 1 ton of CO2 removed ~ $25 US) on-demand to businesses.

The best part is that the marketplace operates on a fixed rate for Carbon Credits (something that has **not** been done before), which allows transactions to be instantaneous and secure. You can manage your contracts and account as both a buyer and seller from our cross-platform mobile app. ​

## How we built it
We created the mobile apps with an Expo-managed workflow for React Native. Our backend API was written using Express and NodeJs. We handled our payment processing with Stripe, which enabled us to have a ready-to-scale application.
## Challenges we ran into
One of the hardest things we did was write the algorithm that responded to the Stripe success webhook and decided which sellers to source the credits from. To make our seamless user experience that didn't involve haggling with individual sellers, we had to convert one contract on the buyer's end to several contract fragments on the seller's end. But in the end, it worked out.

## Accomplishments that we're proud of
We're really happy that we built a truly scalable app. None of our workflows used sketchy workarounds or technologies that wouldn't make it into production. This was also our first time using Stripe, and we found that the backend configuration wasn't as bad as it seemed.

## What we learned
We learned how to leverage stripe and certainly improved our schema design skills. We went through over 20 different iterations on Friday before we decided on the one that gave us all the information we needed in the most effective way. In effect, we 'measured twice and cut once', which ultimately ended up making this project possible.

## What's next for Carbon Back
If we're able to secure any prize money, we all agree that we'd want to put it towards making this official (getting an LLC, proper domain, etc.) since it has so much potential due to it's scalability.
