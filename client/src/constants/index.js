import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

export const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/admin", label: "Admin"},
    // { href: "/signIn", label: "Sign In" },
];

export const events = [
    { 
        name: "Valentine's Gala", 
        location: "1724 Bank Street", 
        date: new Date(2025, 1, 14), 
        fee: 0, 
        poster: "src/assets/images/valentine_gala.jpg", 
        recurring: false, 
        summary: "A glamorous evening of love and celebration, with games, food, and a Q&A for couples!",
        description: `Hey fam 👋🏽<br /><br />

The countdown is ON! MFH is lighting up the night with our dazzling Valentine's Day Gala on Feb 14th at 7pm! 😍💖 Get those fancy outfits ready because we're about to turn up the fun!<br /><br />

Expect an evening filled with:<br />
✨ Fun games<br />
🍽 Delicious food<br />
💬 A sizzling couples Q&A<br />
📸 Loads of chances to mingle, snap pics, and celebrate!<br /><br />

Don't miss out—register now to secure your spot: <a href="https://mfhyoungadults.fillout.com/valentines-day-gala">Register Here</a> 🎟<br /><br />

Plus, we're kicking off our Q&A polls early this year! Now's your chance to submit and upvote your favorite questions for our panelists. No question is too spicy—let your curiosity shine! 🌶💬 <a href="https://app.sli.do/event/as7Z2W6pnSTRCAV2gg44Vr">Submit Your Question Here</a><br /><br />

And hey, there's still time to ask that special someone to be your Valentine—whether it’s a friend, partner, or that person who’s caught your eye. We can’t wait to celebrate love with you at the MFH Valentine's Gala 2025! ❤🎉<br /><br />

See you there!`
, 
        formLink: "https://mfhyoungadults.fillout.com/valentines-day-gala" 
    },
    { 
        name: "Youth Hangout", 
        location: "1724 Bank St", 
        date: "Every Friday", 
        fee: 0, 
        poster: "src/assets/images/youth_hangout.jpg", 
        recurring: true, 
        summary: "Join us every Friday for a fun hangout session, connecting with others and learning about Emotional Intelligence!",
        description: `Hey y’all! 👋🏽<br /><br />

Do you consider yourself emotionally intelligent? Or maybe you're like me and aren't even sure what that means. Well, this month, you're in luck! 🎉<br /><br />

This February, our Culture Group has put together a series of resources to help us dive into Emotional Intelligence—what it is, why it matters, and how to level up our skills! 💡<br /><br />

Starting this week, you’ll receive an email with insightful articles and podcasts on each topic—perfect for some food for thought ahead of our weekly hangout! 🗣📖<br /><br />

After this week, emails will be sent out every Sunday. If you haven’t received anything by next week, reach out to Nomso or Deinye.<br /><br />

You can also find the weekly resources on our website every Sunday morning! ☀ Check out the first issue here: <a href="https://www.rccgmfh.org/blog/monthly/know-yourself-first">Know Yourself First</a> 👀`
    },
    { 
        name: "Wednesday Prayer Meeting", 
        location: "1724 Bank St", 
        date: "Every Wednesday", 
        fee: 0, 
        poster: "src/assets/images/weekly_prayers.jpg", 
        recurring: true, 
        summary: "Join us for mid-week prayer and spiritual growth every Wednesday.",
        description: `Gather with us every Wednesday for a time of prayer and reflection. We’ll be praying for personal growth, strength, and guidance for the week ahead. Whether you're a regular or new to the community, we welcome you to join us for an uplifting and peaceful time together.<br /><br />
        Let’s seek God’s presence and strengthen our faith as a community. 🙏🌿`
    },
    { 
        name: "Saturday Prayer Meeting", 
        location: "1724 Bank St", 
        date: "Every Saturday", 
        fee: 0, 
        poster: "src/assets/images/weekly_prayers.jpg", 
        recurring: true, 
        summary: "Every Saturday, we come together for a time of prayer and fellowship.",
        description: `Every Saturday, come join us for an inspiring time of prayer and fellowship. This is a wonderful opportunity to reflect, connect with others, and recharge spiritually for the week ahead. Everyone is welcome to share in this sacred time with us.<br /><br />
        We can’t wait to pray and grow together as a community. 🌸🙏`
    },
    { 
        name: "Children's Connect Group", 
        location: "1724 Bank St", 
        date: "Every Friday", 
        fee: 0, 
        poster: "src/assets/images/children_connect.jpg", 
        recurring: true, 
        summary: "A safe, fun, and engaging space for kids to grow spiritually every Friday!",
        description: `Every Friday, we create a fun, safe, and engaging space for children to grow spiritually. With games, stories, and hands-on activities, the Children's Connect Group helps kids build strong foundations of faith and friendship.<br /><br />
        This is a fantastic opportunity for children to learn more about God, share experiences, and connect with other kids in the community. Bring your little ones and let them enjoy the excitement! 🎨🖍`
    }
];
