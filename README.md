# Valentine's Day Topic - WhyItTV Deployment

## Release Date
**Friday, February 13, 2026 at 11:59 PM CT**
(Drops night before Valentine's Day - Saturday Feb 14)

## Files Included

### New Files to Add:
```
topics/valentines-day.html          <- Full topic page
assets/images/topics/valentines-day/
├── hero.png                        <- Main logo (fiery heart)
├── critique.png                    <- The Critique thumbnail
├── debate.png                      <- The Debate thumbnail
├── deep-dive.png                   <- The Deep Dive thumbnail
├── infographic-system.png          <- Infographic v1 (fiery/stylized)
└── infographic-map.png             <- Infographic v2 (system map)
```

### Files to Update:

#### 1. script.js - Add to RELEASE_SCHEDULE array:
```javascript
{ topic: 'valentines-day', date: '2026-02-13T23:59:00-06:00', title: "Valentine's Day" },
```
Insert at the appropriate position in your schedule.

#### 2. schedule.html - Add schedule entry:
See SCHEDULE_HTML_SNIPPET.html for the exact markup.
Adjust the schedule-number based on position.

#### 3. topics.html - Add topic card:
See TOPICS_HTML_SNIPPET.html for the exact markup.

#### 4. board.html (optional) - Add Board question:
```javascript
{
    topic: 'valentines-day',
    releaseDate: '2026-02-13T23:59:00-06:00',
    question: "What ritual or tradition—romantic or otherwise—do you participate in even though you're not sure why?",
    topicTitle: "Valentine's Day",
    topicUrl: '/topics/valentines-day.html'
}
```

## Brand Colors Used
- Primary: #e63946 (warm red)
- Secondary: #f4a261 (gold/amber)
- Glow: rgba(230, 57, 70, 0.4)

## Notes
- This is a special "event" topic inserted for the Valentine's Day holiday
- Category: "Cultural Systems" (not "Brands" like American Icons series)
- Two infographics included (both display on page)
- Explainer thumbnail uses hero image (YouTube auto-generates from video)

## After Release
Update video links in valentines-day.html once YouTube uploads complete:
- Explainer: href="#" -> href="https://youtube.com/watch?v=XXXXX"
- Debate: href="#" -> href="https://youtube.com/watch?v=XXXXX"
- Critique: href="#" -> href="https://youtube.com/watch?v=XXXXX"
- Deep Dive: href="#" -> href="https://youtube.com/watch?v=XXXXX"
