package io.kaleido.samples.documentstore;
import io.socket.client.Socket;

import java.io.IOException;

public class App {
    public static void main(String[] args) {
        Socket socket;
        try {
            Config.initConfig("src/main/resources/config.json");
            SocketIOClient client = new SocketIOClient(
                    Config.getConfig().getApiEndpoint(),
                    Config.getConfig().getAppCredentials().getUser(),
                    Config.getConfig().getAppCredentials().getPassword());
            socket = client.init();
            socket.on(Socket.EVENT_CONNECT, args1 -> System.out.println("Socket connected.")).on(Socket.EVENT_ERROR, args1 -> System.out.println("Error.")).on(Socket.EVENT_DISCONNECT, args1 -> System.out.println("Socket disconnected."));
            socket.connect();
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
    }
}
