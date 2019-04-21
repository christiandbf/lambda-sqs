# Serverless Lambda SQS Practice

Just playing with serverless.

## Useful commands

* Deploy the Service

    ```bash
        serverless deploy -v
    ```

* Deploy the Function

    ```bash
        serverless deploy function -f hello
    ```

* Invoke the Function

    ```bash
        serverless invoke -f hello -l
    ```

* Fetch the Function Logs

    ```bash
        serverless logs -f hello -t
    ```

* Cleanup

    ```bash
        serverless remove
    ```
