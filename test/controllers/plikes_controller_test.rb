require 'test_helper'

class PlikesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get plikes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get plikes_destroy_url
    assert_response :success
  end

end
