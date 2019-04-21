# Serverless Lambda SQS Practice

Just playing with serverless.

## Useful commands

* Deploy the Service

    ```bash
        serverless deploy -v
    ```

* Deploy the Function

    ```bash
        serverless deploy function -f processSQSLambda1
    ```

* Invoke the Function

    ```bash
        serverless invoke -f processSQSLambda1 -l
    ```

* Fetch the Function Logs

    ```bash
        serverless logs -f processSQSLambda1 -t
    ```

* Cleanup

    ```bash
        serverless remove
    ```

* Invoke with mock

    ```bash
        serverless invoke --function processSQSLambda1 --path ./mocks/sqs-lambda1.json
    ```