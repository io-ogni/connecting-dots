import { Clock, Target, Users, Lightbulb, type LucideIcon } from "lucide-react";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  icon: LucideIcon;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "when-youve-tried-it-all-but-time-still-slips-through-your-fingers",
    title: "When You've Tried It All, But Time Still Slips Through Your Fingers",
    excerpt:
      "What if I would ask you: what is your relationship with time? There are two aspects you might want to consider: the quality of the relationship, and the purpose of the relationship.",
    tag: "Time Management",
    icon: Clock,
    content: `You feel you've tried every single Time Management tip you could find, read all the available books and have by now so much knowledge that you could write your PhD on it; yet still time slips through your fingers.

What if I would ask you: **what is your relationship with time?** There are 2 aspects that you might want to consider: the quality of the relationship, and the purpose of the relationship.

1. The first aspect relates to *how much you value your time*, how precious it is for you. Is it your resource or your pain? Is it maybe something to fix, to control or a gift to be grateful for?

2. The second aspect to look at is *the purpose of your engagement* in this relationship. Your "time" is actually your "life", and the purpose of this relationship is your life purpose. Is there a greater purpose in your life, a north star that will keep you on track no matter what life throws at you, or are you drifting away?

I do not believe we can control time, just as I do not believe we can make time. Time is simply one dimension of our universe, and as that good old joke says — *it exists so that everything doesn't happen at the same time.*

The way we experience time, on the other hand, is in a purely subjective way, and this is something in our power to change.

---

Coaching is a great tool at your disposal for finding out more about your relationship with time and your overarching values and goals.

If you would like me to walk you through this journey, let me know.`,
  },
  {
    slug: "where-did-my-time-go",
    title: "Where Did My Time Go?",
    excerpt:
      "Investigating together with my clients into their relationship with time, I find recurrent patterns — over-perfecting, saying yes to everything, multitasking. Each has a positive side when used with awareness.",
    tag: "Time Management",
    icon: Target,
    content: `Time and again, investigating together with my clients into their relationship with time, I find recurrent patterns when it comes to not getting enough things done during the week.

Some of them I've also experienced myself, firsthand. Each one of these behaviors has a positive side, when used with care and awareness, and a negative one — when used unconsciously.

**1. Over-perfecting something that does not require it**

Unless you are working on your masterpiece, chances are that what you are supposed to deliver does not require over-perfecting. Reading the same email for 15 times before sending it, staying until 1 a.m. to make a pixel perfect PowerPoint presentation slide that you will show for 30 sec, over-engineering a piece of code that worked perfectly fine already — these are just examples of things I've seen being done out of the "Be perfect" driver and not for the sake of the delivery/project. Of course, going the extra mile makes us reach high performance, but be aware when you do it for reaching performance and when you do it because you compulsively need to.

Disclaimer: if you have the time, the resources and the will to deliver your ideal work, then do it consciously, meaning being aware that you are *consciously over-perfecting something and knowing exactly why you are doing it*. This will prevent you from feeling guilty for "spending too much time on this".

**Antidote**: ask yourself "What is *required* of me in this situation?", "What do I *want* to do in this situation?", "When do I think that I will be satisfied with the result of my work?", "What is realistic/pragmatic for me to do in this situation?"

**2. Doing tasks which are not in your responsibility to do**

Unclear role definitions, fuzzy personal boundaries, times of high uncertainty, missing agreements — there are so many causes to accepting to do work that should not / is not in your responsibility.

**Antidote**: ask yourself "Am I the right person to solve this?", "Do I have all the skills, data, authority etc. to solve this?", "Knowing that this is not my task, do I still want to deliver it myself?"

**3. Spending too much time thinking about how bad you feel about spending too much time in various useless activities**

It might sound funny reading this phrase, but it is a very stressful place to be. You are feeling guilty for not doing enough work and you spend so much energy and focus on this thought, that you end up having even less time and energy to get work done.

**Antidote**: Be kind to yourself. Also, have a daily 3 min time for yourself at the end of the day, when you answer these questions:

- What are the 3 things that went well today?
- What did I learn today?
- What do I want to do differently next time?

**4. Compulsively doing things you know that are neither important nor urgent, although the TODO list is only getting bigger**

**Antidote**: Understand your reason behind this behavior; procrastination can have multiple causes, and it is important to get clarity into why *you* are procrastinating.

In some cases, one could simply not feel confident enough to start with the other important tasks, or is afraid of failing; some other times, maybe you are just too tired — physically and mentally — and have no more energy for anything else, or simply you are supposed to do things which you do not like, do not approve with or are not aligned with your values and with who you are.

Nevertheless, the first step in this direction is to accept that there is a need which is unmet, and procrastination is a symptom of that. One way to deal with procrastination is to clarify the need behind it and meet that need in other, more effective ways.

---

If you would like to explore this space together with me, let me know.`,
  },
  {
    slug: "why-meetings-without-agenda-are-a-no-go",
    title: "Why Meetings Without Agenda Are a No-Go",
    excerpt:
      "When you send out an invite with an empty text and a fuzzy title like 'Sync' or 'Status', there is a high chance your meeting will not be structured and will have no clear, measurable outcome.",
    tag: "Time Management",
    icon: Users,
    content: `When you send out an invite with an empty text and maybe fuzzy title like "Sync" or "Status" or even "Meeting", there is a high chance that one of the following things will happen:

**1.** Your meeting will not be structured, you will not follow a plan and have no clear, measurable outcome.

**2.** Your invitees will not get a chance to do any prep work; you will lose valuable time in the meeting to bring them up to speed and/or schedule yet another meeting, for when they will have had the time to prep on the topic.

**3.** Your invitees will think you do not really know yourself what this meeting is about and, honestly, they might be right. If you are not able to nail down a few bullet points in the agenda, chances are that you haven't clarified the meeting's purpose yourself, and thus the reunion is not really set up for success.

**4.** If you are the line manager, your invitees might think something bad happened and this is why you are not writing in the agenda. This is true especially in times of uncertainty of big changes inside the company. One of my colleagues once told me "I really thought he wanted to tell me I became redundant, but he only wanted to congratulate me for my birthday." Even if things might not be that extreme all the time, you are still creating a wave of uncertainty and mystery which are taking one's mind away from work, rather than focus it on work.

---

Learn more on how to set up successful meetings in the article "Tips for Meetings That Make Sense".`,
  },
  {
    slug: "tips-for-meetings-that-make-sense",
    title: "Tips for Meetings That Make Sense",
    excerpt:
      "Everybody hates losing time without getting anything in return, which is exactly what we do when we set up useless or badly prepared meetings. Here are tips from more than a decade of sitting in conference rooms.",
    tag: "Time Management",
    icon: Lightbulb,
    content: `"It's a universal feeling nowadays, everybody just hates meetings". Is this really true? I think everybody hates losing time without getting anything in return, which is exactly what we do when we set up useless or badly prepared meetings.

As I spend most of my career interacting with other people, here are a few tips based on what I learned in more than a decade of sitting in conference rooms.

#### Are you the organizer?

**1. Ask yourself**: Is this meeting really necessary, or could I just send out an email to get the same outcome? It might seem easier to talk to people than to write to them, and it is definitely "funnier" to spend the first 10 minutes asking each other "Can you hear me? / Why can't I see you?" than writing a boring email, but a meeting is a disruption in some else's work flow, while an email can be read whenever the recipient makes time for it. Be considerate when choosing to disrupt someone's calendar by setting up a meeting.

**2. Agenda**: there should be a law interdicting the meetings without agenda. Even if it is just a catch-up, write it so. It is not only business courtesy but also incredibly efficient to send a bullet-points list of agenda items. Is prep work required from the attendees? Then specify what is expected, from whom and by when.

**3. Invitees**: send the invite **only to those people** who should be actively contributing to the meeting outcome. If you want your colleague Elly to just be informed that the meeting is taking place, then add her as an "Optional" and specify in the message that this is only for her info and that a recording will be made available after the meeting.

**4. Time slots**: not every open slot in someone's calendar should be considered perfect for a meeting. For instance, it is bad practice to set up a back-to-back meeting in someone's calendar, simply because that person may not get the chance to even go to the restroom. Leave at least 10 min between the meetings and you will see greater commitment.

Also, you might want to think if your colleague is a morning "lark" or a night "owl", before setting up that 8 a.m. strategy meeting. Keep in mind the time-zone difference and be respectful of people's personal time, no matter where they might live.

**5. Set up time slots in your own calendar for prep work and post-meeting work**: being the organizer means many times that you need to do some prep work up front. Plan that slot in your calendar, do not assume you will find time for it. Writing the meeting notes with the decisions and action items and doing the follow up work should also reflect in your calendar as a blocked slot, so that you feel you are in control of whatever comes out of the meeting.

#### Have you received an invite?

**1. Declining is also an option**: If you strongly believe that your input is not absolutely necessary for that meeting and that you can be informed via email of the outcome, there is always the option to decline it, while specifying the reason. The same applies for meetings without agenda, meetings overlapping other already existing meetings in your calendar.

**2. Ask yourself**: Is my input absolutely required in this meeting? Is it necessary to debate over a certain topic?

Remember that you are the one deciding about your own time. Every meeting in your calendar got there with your approval.

**3. Is prep work required from your side?** Then make sure you block that slot of work in your calendar.

---

The most important thing I learned about time management is that, at the end of the day, the famous **taking control over your calendar** actually means **take responsibility for your decisions and actions**.

If you would like to explore this space together with me, let me know.`,
  },
];
