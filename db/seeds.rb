# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Book.destroy_all

u1 = User.create(username: "booklover", password: '1234', password_confirmation: '1234', photo_url: "https://i.imgur.com/DOiIxb7.jpg")
u2 = User.create(username: "readalot", password: '1234', password_confirmation: '1234', photo_url: "https://i.imgur.com/44eQiL1.jpg")
u3 = User.create(username: "bookfriend", password: '1234', password_confirmation: '1234', photo_url: "https://i.imgur.com/qnyhNFb.jpg")
u4 = User.create(username: "iheartbooks", password: 'book', password_confirmation: 'book', photo_url: "https://i.imgur.com/9ggdS9X.jpg")
u5 = User.create(username: "rainyreader", password: 'book', password_confirmation: 'book', photo_url: "https://i.imgur.com/SVvdLez.jpg")
u6 = User.create(username: "booknerd", password: 'book', password_confirmation: 'book', photo_url: "https://i.imgur.com/0DVYZil.jpg")
    
b1 = Book.create(title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Fantasy", image_url: "https://sarahjmaas.com/wp-content/uploads/2022/01/ACOTAR_1.jpg")
b2 = Book.create(title: "A Court of Mist and Fury", author: "Sarah J. Maas", genre: "Fantasy", image_url: "https://sarahjmaas.com/wp-content/uploads/2022/02/ACOMAF_2h.jpg")
b3 = Book.create(title: "House of Sky and Breath", author: "Sarah J. Maas", genre: "Fantasy", image_url: "https://bookupgdl.com.mx/wp-content/uploads/2022/01/9781635574074.jpg")
b4 = Book.create(title: "Crown of Midnight", author: "Sarah J. Maas", genre: "Fantasy", image_url: "https://sarahjmaas.com/wp-content/uploads/2022/08/3-Crown-of-Midnight-US.jpg")
b5 = Book.create(title: "Things We Hide From the Light", author: "Lucy Score", genre: "Romance", image_url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781728276113_p0_v6_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D")
b6 = Book.create(title: "Dune", author: "Frank Herbert", genre: "Science Fiction", image_url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780441172719_p0_v7_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D")
b7 = Book.create(title: "The Hollow Kind: A Novel", author: "Andy Davidson", genre: "Horror", image_url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780374538569_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D")
b8 = Book.create(title: "Trust", author: "Hernan Diaz", genre: "Historical Fiction", image_url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593420331_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D")

r1 = Review.create(header:"Loved This Book!", comment: "The author educates and entertains simultaneously. Full of subtle surprises. An oddly gripping read that kept me turning the pages.", book_id: b5.id , user_id: u3.id)
r2 = Review.create(header:"Meh", comment: "I was disappointed in 'Trust'. It is beautifully written but never goes anywhere. Each story is interesting and would have made a good novel if expanded, but altogether not much of a book.", book_id: b8.id , user_id: u3.id)
r3 = Review.create(header:"YES!", comment: "I was hooked after the first couple chapters! I highly recommend this book for fantasy fans.", book_id: b1.id , user_id: u2.id)
r4 = Review.create(header:"Slow start", comment: "But once you get about halfway, the story takes off. Great.. just hang in there for the first bit.", book_id: b2.id , user_id: u3.id)
r5 = Review.create(header:"Favorite book of all time", comment: "Quite possibly my favorite book ever, not just of this series. I highly recommend it.", book_id: b3.id , user_id: u4.id)
r6 = Review.create(header:"Great read", comment: "This is one of those books where you wish you could read it for the first time again, it's just such a great book. These characters are one of a kind and I truly cherish them so much.", book_id: b4.id , user_id: u5.id)
r7 = Review.create(header:"In Love", comment: "I like this book, it has a lot of good content that will be useful to know in the last book but certianly not necessary. I don't think that this is a must read before continuing to the last book.", book_id: b5.id , user_id: u1.id)
r8 = Review.create(header:"Not my cup of tea", comment: "Skimmed at best. Was boring and couldn't seem to get into the characters.", book_id: b7.id , user_id: u4.id)
r9 = Review.create(header:"Suprised!", comment: "I read this book in like, maybe 18 hours the first time through. I couldn't put it down. Hooked me on an emotional Rollercoaster... the last quarter was just that!! It had me happy and sad and angry and tense! ", book_id: b6.id , user_id: u6.id)

puts "Done Seeding."
# https://www.merrilykristin.com/wp-content/uploads/2023/01/TBR-Cart-scaled.jpg

