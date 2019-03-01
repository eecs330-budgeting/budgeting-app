from flask import Flask, render_template, request
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = '1jsbfja#'
socketio = SocketIO(app)

@app.route('/', methods=['GET', 'POST'])
@app.route("/index")
def form():
    return render_template('index.html')
@app.route('/account')
def account():
    return render_template('account.html')

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)

if __name__ == '__main__':
    socketio.run(app, debug=True)