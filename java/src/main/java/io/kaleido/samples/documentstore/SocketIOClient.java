package io.kaleido.samples.documentstore;

import io.socket.client.IO;
import io.socket.client.Manager;
import io.socket.client.Socket;
import io.socket.engineio.client.Transport;

import java.net.URI;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Map;

public class SocketIOClient {
    private String apiEndpoint;
    private String appCredUser;
    private String appCredPassword;
    private Socket socket;
    public SocketIOClient(String apiEndpoint, String appCredUser, String appCredPassword) {
        this.apiEndpoint = apiEndpoint;
        this.appCredUser = appCredUser;
        this.appCredPassword = appCredPassword;
    }

    private String authToken() {
        return Base64.getEncoder().encodeToString(String.format("%s:%s", appCredUser, appCredPassword).getBytes());
    }

    public Socket init() {
        IO.Options options = new IO.Options();
        options.forceNew = true;
        options.reconnection = false;
        socket = IO.socket(URI.create(apiEndpoint), options);
        socket.io().on(Manager.EVENT_TRANSPORT, args -> {
            Transport transport = (Transport) args[0];
            transport.on(Transport.EVENT_REQUEST_HEADERS, args1 -> {
                @SuppressWarnings("unchecked")
                Map<String, List<String>> headers = (Map<String, List<String>>) args1[0];
                headers.put("authorization", Arrays.asList("Bearer " + authToken()));
            });
        });
        return socket;
    }
}
