chat app backend



AUTH
     note i use jwt ( jsonwebtoken ) for auth user can  sigup, login and logout. when user signup or login jwt send to user by cookies and that jwt will work for 6 hours. after 6 house user mush login and get jwt

    Signup
        URL: path/auth/signup
        Data requirement : {
            userName: string,
            password: string,
        }
        WHAT THE CODE DO ( step by step ) : 
            STEP 1 
                        // CHECK "userName" and "password" ARE NOT NULL OR UNDEFIND

            STEP 2 
                    // CHECK IF USER EXIST

            STEP 3
                    // USER NOT EXIST IN DATABASE SO WE CAN HASH THE PASSWORD AND CREATE USER TABLE IN DATABASE

            STEP 4
                    // CREATE JWT AND SEND JWT USING COOKIE

            STEP 5
                    // SEND SUCCESS MSG


    LOGIN
        URL: path/auth/login
        REQUIREMENT : {
            userName: string,
            password: string,
        }
        WHAT THE CODE DO ( step by step ) : 
            STEP 1 
                        // CHECK "userName" and "password" ARE NOT NULL OR UNDEFIND

            STEP 2 
                    // CHECK IF USER EXIST

            STEP 3
                    // CHECK THE PASSWORD  IS CORRECT

            STEP 4
                    // CREATE JWT AND SEND JWT USING COOKIE

            STEP 5
                    // SEND SUCCESS MSG


    LOGOUT
        URL: path/auth/logout
        REQUIREMENT :  ??


==> GROUP
    CREATE
        URL: path/group/create
        REQUIREMENT: {
            data: {
                groupName: string,
                groupInfo: string,
                members: array, --> array must have one user ( admin )
                admin: UUID --> admin ( userId ) 
            }
        }

    JOIN
        URL: path/group/join
        REQUIREMENT: {
            userId: UUID, --> user id
            groupId: UUID, --> grouop id
        }

7:58 1760