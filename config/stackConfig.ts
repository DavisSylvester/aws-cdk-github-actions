export const stackConfig = {

    environments: {
            development: {
                resources: 
                    {
                    "buckets": [
                        {
                            name: ''
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