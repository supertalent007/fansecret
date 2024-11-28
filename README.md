
The following things are partly done, but not entirely. First please resolve the vercel deployment issue so we can view the site. 

Messaging
	-Add sidebar showing list of chats
	-Enable photo and video attachments to messages from vault content (vault content is content that the user already posted and was approved by safety checks)
	-Enable pricetags on message text, photo, or videos
	-Enable the ability to send tips in messaging

Credits, Earnings, and Finances
	-Create credit purchase page with a sliding scale amount. Users type in the amount to spend or slide the scale. Their payment method is charged they agree to pay and their credit is topped up accordingly. CCBill api. 
	-Internal credit management system. Users interact and spend credit. Their total credit amount declines. 
	-Payouts. While credits cannot be paid out, users who receive payments have earnings. Earnings can be “paid out” with a button in the finances page. 
	-The finances tab will show all credit, earnings, and transaction history for fans and creators. Buttons for credit top up and payout respectively. Someone who is both a fan and a creator would have both panels. Also show all transactions within the platform: subscriptions, tips, paid content etc. Shows when, who and what for all transactions. 
	-Graph for earnings over time for creators

Collaborative Content
	-Create a button on the new post panel to tag other creators. If some content is posted that has multiple creators, then the poster must tag the others. 
	-The tagged creator receives a notification where they can see the text of the post and the content. They can approve or deny the post. 

Admin
	-Backend Admin page for me only, not all users. 
	-Purpose is for content moderation. 
	-Approvals. All new image and video content to be posted goes into an approvals pipeline to be reviewed. Also show the status of any collaborative content tagging. 
	-Banned words. Enable a banned words list. Any message or post attempted to be sent or posted by any user will just not post/send. The button just won’t work. Every time someone tries to use a banned word, a notification appears in the banned word page in admin so admin can see what they tried to post/send. Enable editing to the banned word list. 
	-Messaging. Enable admin messaging to any user that will appear at the top of their messaging page in bold
	-User Management. Search function for any user. See their userID, name, age, email, other information. Contain links to view their profile, all their content, all their messages. Button for suspension (with a space to type in the number of days), Button for account deletion, IP tracking data for that user, financial verification document, all history of that user on the account
	-Sumsub. New users will be onboarded with sumsub. They will do ID verification for age and identity. I will need to be able to select certain US states or countries to “forget” information—so for example, for users from Florida I will need to forget their identity information. So there needs to be some way to set a “forget list”. Besides ID verification for age, I will also do financial verification. Users will need to upload some document showing income or assets (tax records, property records, W-2, etc., any document. 

Login/signup
	-simple login page with image background and login/signup
	-signup interface through sumsub that also includes financial verification if they are signing up to view content. If they select to signup only to post but not view, then they don’t do financial verification and their interface is is just creator interface without the ability to see others. If they signup to view content, then they will do the financial verification and they will be able to both post and view. 
	-check box for whether or not they want to view content
	-check boxes with disclosure text for both kinds
	-subsub integration















