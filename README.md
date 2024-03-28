# Posts System
<img src="https://i.ibb.co/6F9JZpP/photo-2024-02-24-14-13-04.jpg" alt="photo-2024-02-24-14-13-04" border="0">

Simple posts system without user accounts.

# Getting Started

Clone the repository:

```bash
git clone https://github.com/GalievDev/posts-system.git
```

Connect the MYSQL database in `application.properties`

```properties
# Database url
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}/PostsSystem
# Login username of the database.
spring.datasource.username=login
# Login password of the database.
spring.datasource.password=password
```

Run backend-server with this command:

```bash
./gradlew bootRun
```

Run client-website:

```bash
npm start
```

**In the console you will receive a link to your local site**

# Used Tools
* [Gradle](https://docs.gradle.org)
* [Spring Boot](https://docs.spring.io/spring-boot/docs/3.2.3/gradle-plugin/reference/html/)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.2.3/reference/htmlsingle/index.html#using.devtools)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.2.3/reference/htmlsingle/index.html#web)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/3.2.3/reference/htmlsingle/index.html#data.sql.jpa-and-spring-data)
* [MySql](https://www.mysql.com)
* [React](https://ru.legacy.reactjs.org)
