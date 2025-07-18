import { ProductReview } from "../types";

export const reviews: ProductReview[] = [
  {
    id: "1",
    name: "Laptop",
    reviews_summary: {
      number_of_reviewers: 10,
      average_star: 4.2,
      star_distribution: {
        "5": 2,
        "4": 4,
        "3": 2,
        "2": 2,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 5,
        product_review:
          "This laptop is a game-changer! The performance is lightning-fast, and the display is stunning. I got the Silver 512GB version, and it handles multitasking like a dream. Highly recommend for professionals and gamers alike!",
        time: "2024-06-10T14:30:00Z",
        user_name: "Alex Johnson",
        user_image:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Really solid laptop with a sleek design. The Black 256GB model is perfect for my work needs, though the battery life could be a bit better for long sessions. Overall, very satisfied!",
        time: "2024-05-15T09:45:00Z",
        user_name: "Samantha Lee",
        user_image:
          "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Great value for the price! The processor is powerful, and the display is vibrant. I wish the 512GB version had more stock, but the Silver model I got works flawlessly for editing.",
        time: "2024-06-01T11:20:00Z",
        user_name: "Michael Chen",
        user_image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The laptop is decent for everyday tasks, but it gets quite warm during intensive work. The Black 256GB version serves my basic needs, though I expected better cooling for the price.",
        time: "2024-05-28T14:15:00Z",
        user_name: "Jessica Taylor",
        user_image:
          "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "Had high expectations but the laptop came with a few dead pixels on the screen. Customer service was helpful in getting a replacement, but it was inconvenient. The Silver 512GB model works fine now.",
        time: "2024-05-22T10:30:00Z",
        user_name: "Robert Anderson",
        user_image:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "This laptop is a game-changer! The performance is lightning-fast, and the display is stunning. I got the Silver 512GB version, and it handles multitasking like a dream. Highly recommend for professionals and gamers alike!",
        time: "2024-06-10T14:30:00Z",
        user_name: "Alex Johnson",
        user_image:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Really solid laptop with a sleek design. The Black 256GB model is perfect for my work needs, though the battery life could be a bit better for long sessions. Overall, very satisfied!",
        time: "2024-05-15T09:45:00Z",
        user_name: "Samantha Lee",
        user_image:
          "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Great value for the price! The processor is powerful, and the display is vibrant. I wish the 512GB version had more stock, but the Silver model I got works flawlessly for editing.",
        time: "2024-06-01T11:20:00Z",
        user_name: "Michael Chen",
        user_image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The laptop is decent for everyday tasks, but it gets quite warm during intensive work. The Black 256GB version serves my basic needs, though I expected better cooling for the price.",
        time: "2024-05-28T14:15:00Z",
        user_name: "Jessica Taylor",
        user_image:
          "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "Had high expectations but the laptop came with a few dead pixels on the screen. Customer service was helpful in getting a replacement, but it was inconvenient. The Silver 512GB model works fine now.",
        time: "2024-05-22T10:30:00Z",
        user_name: "Robert Anderson",
        user_image:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "2",
    name: "Smartphone",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 4.0,
      star_distribution: {
        "5": 2,
        "4": 1,
        "3": 1,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 4,
        product_review:
          "The AMOLED display on this phone is gorgeous, and the camera takes stunning photos. I got the Blue 128GB model, and it’s super fast. Only downside is the battery drains a bit quickly with heavy use.",
        time: "2024-05-20T16:10:00Z",
        user_name: "Emily Davis",
        user_image:
          "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Best smartphone I’ve owned! The White 256GB version has plenty of storage, and the performance is top-notch. The camera system is incredible for low-light shots. Love it!",
        time: "2024-06-05T08:25:00Z",
        user_name: "James Patel",
        user_image:
          "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "Decent phone, but I expected more from the Black 128GB model. The display is great, but I've had some software glitches. Customer service was helpful, though, so I'll keep using it.",
        time: "2024-05-30T13:15:00Z",
        user_name: "Lisa Wong",
        user_image:
          "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Absolutely love this phone! The Black 256GB model is perfect for photography and gaming. The display is vibrant, and the battery life exceeds expectations. Highly recommended!",
        time: "2024-06-12T09:40:00Z",
        user_name: "Rachel Green",
        user_image:
          "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "The phone looks great, but I've experienced connectivity issues with the Blue 128GB model. WiFi drops frequently, and the phone gets quite hot during calls. Hoping for a software update fix.",
        time: "2024-06-08T15:20:00Z",
        user_name: "Kevin Murphy",
        user_image:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 3.8,
      star_distribution: {
        "5": 1,
        "4": 2,
        "3": 1,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 5,
        product_review:
          "These earbuds are fantastic! The noise cancellation is impressive, and the Blue version looks so sleek. Perfect for workouts and commutes. Battery life is solid too!",
        time: "2024-06-15T10:50:00Z",
        user_name: "Ryan Carter",
        user_image:
          "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Really enjoy the sound quality of the White earbuds. They’re comfortable for long periods, but the case feels a bit flimsy. Still a great buy for the price!",
        time: "2024-06-12T17:40:00Z",
        user_name: "Olivia Brown",
        user_image:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Black earbuds are good for calls, but the bass is weaker than expected. They fit well, but I wish the sound was a bit richer for music.",
        time: "2024-06-18T12:05:00Z",
        user_name: "Noah Kim",
        user_image:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Great earbuds for the price! The White version pairs easily and the sound is clear. Battery lasts all day, though I wish the touch controls were more responsive.",
        time: "2024-06-20T08:30:00Z",
        user_name: "Sarah Mitchell",
        user_image:
          "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "The Blue earbuds look nice but keep disconnecting from my phone. Also, one earbud is noticeably quieter than the other. Disappointing quality control.",
        time: "2024-06-22T16:45:00Z",
        user_name: "Mark Thompson",
        user_image:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "4",
    name: "Smartwatch",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 4.0,
      star_distribution: {
        "5": 1,
        "4": 2,
        "3": 1,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 4,
        product_review:
          "Love the Silver Metal band version! It looks stylish and tracks my workouts accurately. Notifications are seamless, but the battery could last a bit longer.",
        time: "2024-04-10T15:20:00Z",
        user_name: "Sophia Martinez",
        user_image:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "This Black Silicone smartwatch is perfect for my active lifestyle. The heart rate monitor is spot-on, and it’s super easy to customize. Worth every penny!",
        time: "2024-05-25T09:10:00Z",
        user_name: "Ethan Wilson",
        user_image:
          "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Great smartwatch, especially the Silver Silicone model. It's comfortable and functional, though I wish it had more app support. Still, a solid choice!",
        time: "2024-06-02T11:30:00Z",
        user_name: "Ava Thompson",
        user_image:
          "https://images.pexels.com/photos/1289919/pexels-photo-1289919.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Black Metal band looks premium but it's quite heavy for daily wear. Health tracking works well, though the interface can be sluggish sometimes.",
        time: "2024-06-08T13:45:00Z",
        user_name: "Tyler Brooks",
        user_image:
          "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "Expected more from the Silver Metal version. The band broke after just two weeks of normal use. Warranty replacement was slow. Disappointed with the build quality.",
        time: "2024-06-15T10:20:00Z",
        user_name: "Amanda Foster",
        user_image:
          "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "5",
    name: "Gaming Console",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 4.4,
      star_distribution: {
        "5": 2,
        "4": 2,
        "3": 1,
        "2": 0,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 5,
        product_review:
          "This console is a beast! The White 1TB model delivers stunning graphics and fast load times. Gaming has never been this immersive. Highly recommend!",
        time: "2024-03-10T18:45:00Z",
        user_name: "Lucas Nguyen",
        user_image:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "The Black 1TB console is fantastic for gaming, with smooth performance and great visuals. Only issue is the limited stock for the 2TB version.",
        time: "2024-04-20T14:15:00Z",
        user_name: "Isabella Garcia",
        user_image:
          "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Incredible console! The White 2TB version has tons of storage, and the gameplay is flawless. Perfect for long gaming sessions with friends!",
        time: "2024-05-30T10:25:00Z",
        user_name: "Mason Lee",
        user_image:
          "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Solid gaming console with great exclusive titles. The Black 1TB model runs quietly and loads games quickly. Could use more backward compatibility options though.",
        time: "2024-06-03T17:30:00Z",
        user_name: "Caleb Rodriguez",
        user_image:
          "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "Good console overall but the White 1TB version gets quite hot during extended gaming sessions. Performance is good but the cooling could be better.",
        time: "2024-06-10T14:20:00Z",
        user_name: "Zoe Parker",
        user_image:
          "https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 3.8,
      star_distribution: {
        "5": 1,
        "4": 1,
        "3": 2,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 4,
        product_review:
          "The Red speaker has amazing sound for its size! It’s perfect for outdoor parties, though the battery life could be a tad better. Great value!",
        time: "2024-06-01T16:00:00Z",
        user_name: "Mia Rodriguez",
        user_image:
          "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "This Blue Bluetooth speaker is a must-have! The bass is deep, and it’s so portable. I take it everywhere, and it never disappoints!",
        time: "2024-06-10T09:35:00Z",
        user_name: "Liam Walker",
        user_image:
          "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Black speaker is decent, but the connection drops occasionally. Sound quality is good, but I expected a bit more for the price.",
        time: "2024-06-15T13:50:00Z",
        user_name: "Emma White",
        user_image:
          "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Red speaker has good volume but the sound gets distorted at maximum level. It's portable and the battery lasts long, but audio quality could improve.",
        time: "2024-06-18T11:15:00Z",
        user_name: "Jordan Mills",
        user_image:
          "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "The Blue speaker looks great but stopped working after a month. Customer service was helpful but having to return it was inconvenient. Build quality seems inconsistent.",
        time: "2024-06-20T15:30:00Z",
        user_name: "Maya Singh",
        user_image:
          "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "7",
    name: "Tablet",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 4.0,
      star_distribution: {
        "5": 1,
        "4": 2,
        "3": 1,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 5,
        product_review:
          "This Space Gray 128GB tablet is perfect for work and play! The display is crisp, and it handles heavy apps with ease. Love the sleek design!",
        time: "2024-02-15T12:10:00Z",
        user_name: "Jacob Harris",
        user_image:
          "https://images.pexels.com/photos/1092870/pexels-photo-1092870.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "The Silver 64GB tablet is great for streaming and browsing. It’s fast and lightweight, but I wish it had more storage options available.",
        time: "2024-03-20T15:40:00Z",
        user_name: "Chloe Adams",
        user_image:
          "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Really happy with the Space Gray 64GB model. The battery life is impressive, and the performance is smooth. Great for sketching and note-taking!",
        time: "2024-04-05T10:20:00Z",
        user_name: "Daniel Kim",
        user_image:
          "https://images.pexels.com/photos/1109359/pexels-photo-1109359.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Silver 128GB tablet is decent for basic tasks but struggles with heavy multitasking. Screen is nice but gets quite warm during long usage sessions.",
        time: "2024-04-15T09:35:00Z",
        user_name: "Hannah Cooper",
        user_image:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "Had issues with the Space Gray 64GB model - screen flickering and occasional crashes. Returned it for a replacement which works better, but initial experience was poor.",
        time: "2024-04-22T16:50:00Z",
        user_name: "Ryan Foster",
        user_image:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "8",
    name: "Digital Camera",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 4.4,
      star_distribution: {
        "5": 2,
        "4": 2,
        "3": 1,
        "2": 0,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 5,
        product_review:
          "This Black Zoom lens camera is a photographer’s dream! The autofocus is lightning-fast, and the image quality is stunning. Worth every penny!",
        time: "2024-05-01T14:55:00Z",
        user_name: "Sophie Turner",
        user_image:
          "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "The Silver Standard lens camera is great for beginners. It’s easy to use, and the photos are sharp. I just wish the zoom lens was in stock!",
        time: "2024-05-15T11:30:00Z",
        user_name: "Henry Patel",
        user_image:
          "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Incredible camera! The Black Standard lens version captures every detail perfectly. It's a bit pricey, but the quality is unmatched!",
        time: "2024-06-10T09:15:00Z",
        user_name: "Amelia Clark",
        user_image:
          "https://images.pexels.com/photos/1121789/pexels-photo-1121789.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Great camera for professional use. The Silver Zoom lens produces sharp images with excellent color accuracy. Battery life could be better for extended shoots.",
        time: "2024-06-15T13:40:00Z",
        user_name: "Nathan Ward",
        user_image:
          "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Black Zoom lens camera takes good photos but the menu system is confusing for beginners. Build quality is solid but takes time to learn all features.",
        time: "2024-06-20T10:25:00Z",
        user_name: "Victoria Hayes",
        user_image:
          "https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "9",
    name: "Headphones",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 3.8,
      star_distribution: {
        "5": 1,
        "4": 2,
        "3": 1,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 4,
        product_review:
          "These headphones have great sound quality and are super comfortable for long sessions. The noise isolation is impressive, but the stock was low when I ordered.",
        time: "2024-04-10T13:25:00Z",
        user_name: "William Brown",
        user_image:
          "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Love these headphones! The sound is crystal clear, and they’re perfect for calls and music. Wish there were more color options, but I’m thrilled with them!",
        time: "2024-04-20T10:45:00Z",
        user_name: "Charlotte Evans",
        user_image:
          "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "Decent headphones, but the bass isn't as strong as I hoped. They're comfortable, but I've had better for the price. Still okay for daily use.",
        time: "2024-05-05T16:20:00Z",
        user_name: "David Lee",
        user_image:
          "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 5,
        product_review:
          "Excellent headphones! The sound quality is amazing and they're incredibly comfortable even for 8+ hour sessions. Great noise isolation for work from home. Highly recommend!",
        time: "2024-05-12T14:30:00Z",
        user_name: "Alex Rivera",
        user_image:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "The headphones broke after 3 months of normal use. One side stopped working completely. Build quality seems lacking for the price point.",
        time: "2024-05-18T11:15:00Z",
        user_name: "Megan Taylor",
        user_image:
          "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "10",
    name: "Portable Charger",
    reviews_summary: {
      number_of_reviewers: 5,
      average_star: 3.4,
      star_distribution: {
        "5": 0,
        "4": 2,
        "3": 2,
        "2": 1,
        "1": 0,
      },
    },
    reviews: [
      {
        star: 4,
        product_review:
          "The Black 10000mAh charger is compact and charges my phone quickly. It’s great for travel, but I wish it was in stock when I needed another!",
        time: "2024-06-05T12:30:00Z",
        user_name: "Grace Kim",
        user_image:
          "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The White 20000mAh charger works well, but it’s a bit bulky for my liking. It gets the job done, but I expected faster charging speeds.",
        time: "2024-06-10T15:10:00Z",
        user_name: "Benjamin Carter",
        user_image:
          "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 4,
        product_review:
          "Really handy charger! The Black 10000mAh version is perfect for daily use. It's lightweight, but the stock issue was a hassle when ordering.",
        time: "2024-06-15T09:50:00Z",
        user_name: "Lily Nguyen",
        user_image:
          "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 3,
        product_review:
          "The Black 20000mAh charger has good capacity but takes forever to charge itself. Useful for long trips but the weight makes it less portable than expected.",
        time: "2024-06-18T14:20:00Z",
        user_name: "Connor Walsh",
        user_image:
          "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=100&h=100&fit=crop",
      },
      {
        star: 2,
        product_review:
          "The White 10000mAh charger stopped working after 2 weeks. It would charge devices very slowly and then died completely. Poor quality control.",
        time: "2024-06-22T08:45:00Z",
        user_name: "Samantha Price",
        user_image:
          "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop",
      },
    ],
  },
];
