docker compose build
kubectl delete -f kube
kubectl apply -f kube
kubectl get pods --watch
kubectl get svc
curl localhost:4001