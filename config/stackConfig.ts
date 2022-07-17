export const stackConfig = {

    environments: {
            development: {
                resources: 
                    {
                    "buckets": [
                        {
                            name: 'samples-profile-pictures'
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