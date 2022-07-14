export const stackConfig = {

    environments: {
            development: {
                resources: 
                    {
                    "buckets": [
                        {
                            name: 'profile-pictures'
                        }
                    ],
                    "lambdas": [
                        {
                            name: 'get-profile'
                        }
                ],
                }
                
            },
            staging: {},
            qa: {},
            preProd: {},
            prod: {},
        }
};