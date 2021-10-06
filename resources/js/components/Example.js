import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" src= "https://d28l47h1uhvbhl.cloudfront.net/assets/profile_image/832475ae-74bf-11eb-b46c-064f3e9f608e.jpeg?cb=20210222043905"/>
                        <span class="font-weight-bold">Lê Công Phúc</span>
                        <span class="text-black-50">phuclc1508@gmail.com</span>
                        <span> </span>
                    </div>
                    <div className="card-body">
                        <div class="mt-5 text-center"><a href="https://www.w3schools.com/">個人情報</a></div>
                        <div class="mt-5 text-center"><a href="https://www.w3schools.com/">パスワードを変更する</a></div>
                        <div class="mt-5 text-center"><a href="https://www.w3schools.com/">プロフィール写真を更新する</a></div>
                        <div class="mt-5 text-center"><a href="https://www.w3schools.com/">ログアウト</a></div>
                    </div>
                </div>
                <div className="col-md-6 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <h4 class="font-weight-bold">User profile</h4>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">User Name</label><input type="text" class="form-control" placeholder="enter Name" value=""/></div>
                        <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value=""/></div>
                        <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""/></div>
                    </div>
                    <div class="row mt-3">    
                        <div class="col-md-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">admin</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">user</label>
                            </div>
                        </div>
                    </div>
                        <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
